import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDarkMode } from 'usehooks-ts';

export const ThemeToggle: React.FC = React.memo(() => {
  const { isDarkMode, toggle } = useDarkMode({ localStorageKey: 'theme' });
  // const themeValue = isDarkMode ? 'dark' : 'light';

  // We don't care about the value, discarding it
  // const [, setTheme] = useLocalStorage<string>('theme', themeValue);

  // React.useEffect(() => { setTheme(themeValue); }, [themeValue, setTheme]);

  return (
    <IconButton onClick={toggle}>
      {isDarkMode 
        ? <DarkMode className='text-3xl' />
        : <LightMode className='text-3xl' />}
    </IconButton>
  );
});