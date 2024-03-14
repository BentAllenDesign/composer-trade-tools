import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { useGetAccountsQuery } from '../../graphql/get-accounts.g';
import { useGetPrimaryAccountIdQuery } from '../../graphql/get-primary-account-id.g';
import { GQLAccount } from '../../graphql/types';
import { setAccountContext, useAccountContext } from '../../state/global/AccountContext';
import { useUserContext } from '../../state/global/UserContext';

export const AccountSelector: React.FC = () => {
  const { accounts, activeAccountId } = useAccountContext();
  const user = useUserContext();

  useGetAccountsQuery({
    skip: !user?.firstName,
    onError: console.error,
    onCompleted: ({ accounts: data }) => setAccountContext({ activeAccountId, accounts: data as GQLAccount[] })
  });

  useGetPrimaryAccountIdQuery({
    skip: !accounts,
    onError: console.error,
    onCompleted: ({ primaryAccount }) => {
      setAccountContext({ 
        accounts,
        activeAccountId: primaryAccount?.id || ''
      });
    }
  });

  const onAccountSelectorChange = React.useCallback((event: SelectChangeEvent<string>) => {
    setAccountContext({ accounts, activeAccountId: event.target.value });
  }, [accounts]);

  const parseAccountNameFromType = React.useCallback((type: string) => {
    const split = type.split('_');
    return split
      .map((word, idx) => !idx 
        ? word.charAt(0) + word.toLowerCase().slice(1) 
        : word)
      .join(' ');
  }, []);

  return (
    <FormControl className='min-w-[150px] !my-2' size='small'>
      <InputLabel id="demo-simple-select-disabled-label">Account</InputLabel>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={activeAccountId || 'oops'}
        label="Account"
        onChange={onAccountSelectorChange}
      >
        {!accounts && <MenuItem value={'oops'}>No accounts found</MenuItem>}
        {accounts?.map(account => (
          <MenuItem key={account.account_uuid} value={account.account_uuid}>{parseAccountNameFromType(account.account_type)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};