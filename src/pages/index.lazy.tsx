import { Box, Fade } from "@mui/material";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Hero } from "../components/Landing/Hero";
import { Welcome } from "../components/Landing/Welcome";
import { useGetUserProfileQuery } from "../graphql/get-user-profile.g";
import { useTokenContext } from "../state/global/ComposerTokenContext";
import { setUserContext } from "../state/global/UserContext";

const mbp = {
  page: "px-4 py-6 sm:px-6 sm:py-8 md:px-9 md:py-10 lg:p-10 xl:p-20 h-full",
};

// TODO: Enforce external conditional classes without passing state around
// const conditionals: { [key: string]: ClassValue[] } = {
//   hero: [landingStep !== 0 && 'hidden']
// }

export const Index: React.FC = () => {
  const { token, setToken } = useTokenContext();
  const [landingStep, setLandingStep] = React.useState<number>(0);
  const navigate = useNavigate();

  // This is the query to get the user's details
  const { loading: processingTokenEntry, error: tokenEntryError } =
    useGetUserProfileQuery({
      skip: !token?.raw,
      onError: console.error,
      onCompleted: ({ userProfile: data }) => {
        setUserContext({
          firstName: data?.firstName,
          lastName: data?.lastName,
          phoneNumber: data?.phoneNumber,
        });
        setLandingStep(1);
      },
    });

  const handleTokenChange = React.useCallback(
    (value: string) => {
      try {
        setToken({ raw: value, payload: jwtDecode(value) });
      } catch (error) {
        console.error(error);
      }
    },
    [setToken],
  );

  const onHeroExited = React.useCallback(() => {
    setLandingStep(2);
  }, []);
  const onWelcomeEntered = React.useCallback(() => {
    setLandingStep(3);
  }, []);
  const onWelcomeExited = React.useCallback(() => {
    console.log("Navigating to dashboard");
    navigate({ to: "/dashboard" });
  }, [navigate]);

  if ([0, 1].includes(landingStep))
    return (
      <Box className={clsx(mbp.page)}>
        <Fade
          in={landingStep === 0}
          appear={false}
          timeout={1000}
          onExited={onHeroExited}
        >
          <Hero
            processingTokenEntry={processingTokenEntry || !!token?.raw}
            tokenEntryError={!!tokenEntryError}
            handleTokenChange={handleTokenChange}
          />
        </Fade>
      </Box>
    );

  return (
    <Box className={clsx(mbp.page)}>
      <Fade
        in={landingStep === 2}
        timeout={1500}
        onEntered={onWelcomeEntered}
        onExited={onWelcomeExited}
        className="flex items-center justify-center w-full h-full"
      >
        <Box>
          <Welcome />
        </Box>
      </Fade>
    </Box>
  );
};

export const Route = createLazyFileRoute("/")({ component: Index });
