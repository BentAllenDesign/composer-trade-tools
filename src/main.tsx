import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './main.css'
import { RouterProvider, Router } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'

const client = new ApolloClient({
  uri: 'http://qnap-nas:8082/v1/graphql',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#EADDFF',
      dark: '#21005D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71',
      light: '#E8DEF8',
      dark: '#1D192B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B3261E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBFE',
      paper: '#FFFBFE',
    },
    text: {
      primary: '#1C1B1F',
      secondary: '#625B71',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
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
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
