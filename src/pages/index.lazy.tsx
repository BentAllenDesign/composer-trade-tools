import { Box, Fade, Typography } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Hero } from '../components/Landing/Hero/Hero';
import { useGetAccountIdsQuery } from '../graphql/get-account-ids.g';
import { useGetOwnerByAccountIdLazyQuery } from '../graphql/get-owner-by-account-id.g';
import { GQLAccount, GQLAccountOwner, GQLAccountOwnerContact } from '../graphql/types';
import { useTokenContext } from '../state/global/ComposerTokenContext';
import { setUserContext, useUserContext } from '../state/global/UserContext';

const mbp = {
  page: 'px-4 py-6 sm:px-6 sm:py-8 md:px-9 md:py-10 lg:p-10 xl:p-20'
};

// TODO: Enforce external conditional classes without passing state around
// const conditionals: { [key: string]: ClassValue[] } = {
//   hero: [landingStep !== 0 && 'hidden']
// }

export const Index: React.FC = () => {
  const { token, setToken } = useTokenContext();
  const [processingTokenEntry, setProcessingTokenEntry] = React.useState<boolean>(false);
  const [landingStep, setLandingStep] = React.useState<number>(0);
  const user = useUserContext();

  // Once we capture the token for authorization, we start by grabbing the account IDs accessible to the user
  const { data } = useGetAccountIdsQuery({ 
    skip: !token?.payload,
    onError: console.error,
    onCompleted: ({ get_accounts }) => { 
      getOwnerByAccountId({ variables: { account_id: get_accounts.accounts[0]?.account_uuid as string }});
    }
  });

  // This is the query to get details for those accounts
  // We have the possibility of getting more than one account, but we're not concerned with getting account
  // details for more than one account at a time, so we'll just grab the first account ID to get owner details
  const [getOwnerByAccountId] = useGetOwnerByAccountIdLazyQuery({
    onError: console.error,
    onCompleted: ({ get_owner_by_account_id: ownerData }) => { 
      // We'll set the user context with the owner details and the accounts
      setUserContext({
        info: ownerData?.identity as GQLAccountOwner,
        contact: ownerData?.contact as GQLAccountOwnerContact,
        accounts: data?.get_accounts.accounts as GQLAccount[]
      });
    }
  });

  const handleTokenChange = React.useCallback((raw: string) => {
    setProcessingTokenEntry(true);

    try {
      const payload = jwtDecode(raw);
      setToken({ raw, payload });
    }
    catch (error) {
      setProcessingTokenEntry(false);
      console.error(error);
    }
  }, [setToken]);

  // I really don't like this throwaway callback for the hero exit
  // but I don't want to spend too much time on this right now
  // TODO: Refactor step-based waterfall flow to be event-driven
  const handleHeroExit = React.useCallback(() => {
    setLandingStep(2);
  }, []);

  React.useEffect(() => {
    if (user) {
      setLandingStep(1);
    }
  }, [user]);

  return (
    <Box className={clsx(mbp.page)}>
      <Fade
        in={landingStep === 0}
        appear={false}
        className={clsx(landingStep !== 0 && 'hidden')}
        onExited={handleHeroExit}
        timeout={1000}
      >
        <Hero processingTokenEntry={processingTokenEntry} handleTokenChange={handleTokenChange} />
      </Fade>
      <Fade
        in={landingStep === 2}
        className={clsx(landingStep !== 2 && 'hidden')}
        timeout={1500}
      >
        <Box className='flex w-full h-full'>
          <Typography variant="h5">Hey, {user?.info.given_name}!</Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export const Route = createLazyFileRoute('/')({ component: Index });
