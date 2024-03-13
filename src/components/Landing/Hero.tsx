import { InfoOutlined } from '@mui/icons-material';
import { Box, Link, TextField, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';

type HeroProps = {
  processingTokenEntry: boolean;
  tokenEntryError?: boolean;
  handleTokenChange: (value: string) => void;
};

const mbp = {
  subtitle: '-mb-4',
};

const text = {
  title: 'text-8xl md:text-[148px] lg:text-[186px] xl:text-[212px] font-display tracking-tighter leading-none text-black',
  subtitle: 'text-4xl md:text-5xl xl:text-6xl font-bold leading-none text-black',
  description: 'text-2xl md:text-3xl xl:text-4xl max-w-2xl',
  callToAction: 'text-xl lg:text-2xl',
};

export const Hero: React.FC<HeroProps> = React.forwardRef(({ processingTokenEntry, tokenEntryError, handleTokenChange, ...props }, ref) => {
  const [tokenFieldValue, setTokenFieldValue] = React.useState<string>('');
  
  React.useEffect(() => {
    if (!tokenFieldValue.length) return;
    handleTokenChange(tokenFieldValue);
  }, [handleTokenChange, tokenFieldValue]);

  const onTokenTextFieldChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTokenFieldValue(event.target.value);
  }, [setTokenFieldValue]);

  return (
    <Box ref={ref} {...props} className="h-full">
      <Typography id="hero-subtitle" className={clsx(mbp.subtitle, text.subtitle)}>
        Meet
      </Typography>
      <Typography component="span" id="hero-title" className={clsx(text.title)}>
        Maestro
      </Typography>
      <br />
      <Typography className={text.description}>
        Your <b>Composer</b>.<b>trade</b> power user companion for dashboards, discovery, data crunching and more.
        <br />
        <br />
        No, we're not affiliated.
      </Typography>
      <br />
      <br />
      <Typography className={text.callToAction}>
        Enter your Composer access token to get started!
      </Typography>
      <Link href='https://discord.gg/9ZXA3MvY' target="_blank" className='flex items-center gap-x-1 text-lg'><InfoOutlined />How do I get my access token?</Link>
      <Box className='flex items-center relative gap-x-2'>
        <TextField
          type='password'
          error={tokenEntryError || (!!tokenFieldValue.length && !processingTokenEntry)}
          helperText={
            !tokenFieldValue.length
              ? 'Paste your access token'
              : 'Invalid token'
          }
          variant="standard"
          inputProps={{
            className: 'text-3xl',
          }}
          className='h-12'
          fullWidth
          onChange={onTokenTextFieldChange}
        />
        <span className={clsx('animate-ping ml-6 h-6 w-6 rounded-full bg-primary opacity-75', processingTokenEntry ? 'visible' : 'invisible')} />
      </Box>
      <Typography className='my-9 text-xs text-gray-500 font-light'>
        We do not store your information
        <br />
        Subject to breaking changes from Composer without notice
      </Typography>
      {/* I will eventually do the whole color multiplying animated block grid thing here */}
    </Box>
  );
});