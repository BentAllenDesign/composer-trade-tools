// THIS IS THE ONLY REACT CONTEXT USAGE IN THE APPLICATION
// Further global state management is handled through Apollo's Reactive Vars
import { JwtPayload } from 'jwt-decode';
import React from 'react';

export type ComposerToken = {
  raw?: string;
  payload?: JwtPayload;
};

export type ComposerTokenContext = {
  token?: ComposerToken;
  setToken: (token: ComposerToken) => void;
};

// Create the token context
export const TokenContext = React.createContext<ComposerTokenContext>({
  setToken: () => {},
});

// Convenience hook for using the token context
export const useTokenContext = () => React.useContext(TokenContext);