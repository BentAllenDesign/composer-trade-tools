import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { Router, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { ApolloProvider } from './providers/ApolloProvider';
import { TokenProvider } from './providers/TokenProvider';
import { routeTree } from './routeTree.gen';

const rootElement = document.getElementById('root');

const theme = createTheme({
  palette: {
    primary: {
      light: '#6a9bff',
      main: '#468ceb',
      dark: '#0064c8',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffffd5',
      main: '#ffe7a3',
      dark: '#cab773',
      contrastText: '#000000',
    },
    error: {
      light: '#ffa48d',
      main: '#e67460',
      dark: '#b14536',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F4F7FC',
      paper: '#F4F7FC',
    },
  },
  typography: {
    fontFamily: '\'Inter\', sans-serif',
    button: {
      fontWeight: 500,
      size: '14px',
    },
    body1: {
      fontWeight: 400,
      size: '16px',
    },
    h6: {
      fontWeight: 500,
      size: '24px',
    },
  },
  components: {
    // Customize MUI components here based on the theme
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Adjust based on your design guideline
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <TokenProvider>
      <ApolloProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
          </ThemeProvider>
        </StyledEngineProvider>
      </ApolloProvider>
    </TokenProvider>
  </React.StrictMode>,
);
