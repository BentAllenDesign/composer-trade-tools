import { Box } from "@mui/material";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import clsx from "clsx";
import React from "react";
import { Header } from "../components/Header/Header";
import { NavigationWrapper } from "../components/Navigation/NavigationWrapper";

const mbp = {
  // Ensure this follows the rest of the main layout's margin and padding
  main: "",
};

const display = {
  appContainer: "flex overflow-x-hidden",
  main: "flex flex-col",
};

const size = {
  appContainer: "h-screen",
};

const color = {
  appContainer: "bg-background",
};

export const MainLayout: React.FC = () => (
  <Box
    className={clsx(
      display.appContainer,
      size.appContainer,
      color.appContainer,
    )}
  >
    <NavigationWrapper />
    <Box className="w-4/5 flex flex-col relative">
      <Header />
      <main className={clsx(mbp.main, display.main)}>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </main>
      {/* <Footer /> */}
    </Box>
  </Box>
);

export const Route = createRootRoute({ component: MainLayout });
