import {
  Box,
  Chip,
  Divider,
  Drawer,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useRouterState } from "@tanstack/react-router";
import clsx from "clsx";
import React from "react";
import { useNavigationContext } from "../../state/global/NavigationContext";
import { Logo } from "./Logo";

export const NavigationWrapper: React.FC = () => {
  const navigationContext = useNavigationContext();
  const { location } = useRouterState();
  const features = React.useMemo(
    () => navigationContext.items.filter((item) => item.type === "FEATURE"),
    [navigationContext.items],
  );

  const resources = React.useMemo(
    () => navigationContext.items.filter((item) => item.type === "RESOURCE"),
    [navigationContext.items],
  );

  const onRootPage = location.pathname == "/";

  if (onRootPage) return null;

  return (
    <Fade in appear timeout={250}>
      <Drawer
        variant="permanent"
        className={clsx(
          "w-56",
          "[&_.MuiDrawer-paper]:w-56",
          "[&_.MuiDrawer-paper]:overflow-x-hidden",
          "[&_.MuiDrawer-paper]:box-border",
          "[&_.MuiDrawer-paper]:bg-white",
        )}
      >
        <Toolbar className="justify-center mt-2 !justify-end !px-3">
          <Box className="flex justify-center w-56">
            <Logo />
          </Box>
        </Toolbar>
        <Box className="overflow-x-visible flex flex-col items-end">
          <List className="w-full">
            {features.map((value, idx) => (
              <ListItem
                key={`side-nav-feature-item-${value.label}-${idx}`}
                className={clsx(value.active && "!border-solid border-0 !border-r-4 !border-primary-300")}
                disablePadding
              >
                <ListItemButton LinkComponent={Link} className="flex justify-end">
                  <Box className="overflow-x-hidden overflow-y-auto flex items-center w-56 my-2 gap-x-4">
                    <ListItemIcon
                      className={clsx(
                        value.active && "text-primary",
                        "!min-w-0",
                        "[&_.MuiSvgIcon-root]:text-2xl",
                      )}
                    >
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        className={clsx(
                          value.active && "text-primary font-medium",
                          "font-light text-xl",
                        )}
                      >
                        {value.label}
                      </Typography>
                    </ListItemText>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider className="w-full flex justify-end [&_.MuiDivider-wrapper]:place-self-end">
            <Chip
              label="Resources"
              size="small"
              className="bg-primary-100 text-primary-900 [&_.MuiChip-label]:text-xs font-medium uppercase tracking-widest select-none"
            />
          </Divider>
          <List className="w-full">
            {resources.map((value, idx) => (
              <ListItem
                key={`side-nav-resource-item-${value.label}-${idx}`}
                disablePadding
              >
                <ListItemButton
                  LinkComponent={Link}
                  className="flex justify-end"
                >
                  <Box className="overflow-x-hidden overflow-y-auto flex items-center w-56 gap-x-4">
                    <ListItemIcon
                      className={clsx(
                        "!min-w-0",
                        "[&_.MuiSvgIcon-root]:text-2xl",
                      )}
                    >
                      {value.icon}
                    </ListItemIcon>
                    <ListItemText>
                      <Typography className="font-light text-xl">
                        {value.label}
                      </Typography>
                    </ListItemText>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fade>
  );
};
