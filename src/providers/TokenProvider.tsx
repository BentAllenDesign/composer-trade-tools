import React, { PropsWithChildren } from 'react';
import { ComposerToken, ComposerTokenContext, TokenContext } from '../state/global/ComposerTokenContext';

export const TokenProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [composerToken, setToken] = React.useState<ComposerToken>({});

  const setComposerToken = React.useCallback((token: ComposerToken) => {
    setToken(token);
    // sessionStorage.setItem('composerToken', token.raw || '');
  }, []);

  const value = React.useMemo<ComposerTokenContext>(() => ({ 
    token: composerToken, 
    setToken: setComposerToken 
  }), [composerToken, setComposerToken]);

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};