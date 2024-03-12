import React, { useState } from 'react';
import Button, { ButtonProps, ButtonTypeMap } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ExtendButtonBase } from '@mui/material';

// Define a type for the custom props
interface ComposerButtonProps extends ButtonProps {
  color?: 'primary' | 'secondary' | 'error';
  variant?: 'contained' | 'outlined' | 'text';
}

// Tailwind CSS styles according to the design guideline
const StyledButton = styled(Button)<ComposerButtonProps>(({ theme, variant, color = 'primary' }) => ({
  fontFamily: "'Roboto', sans-serif",
  fontWeight: 500,
  borderRadius: '8px',
  boxShadow: '1px 2px 1px rgba(0,0,0,0.1)',
  '&:hover': {
    boxShadow: '2px 3px 2px rgba(0,0,0,0.1)',
  },
  ...(variant === 'outlined' && {
    border: `1px solid ${theme.palette[color].main}`,
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color].light,
    },
  }),
  ...(variant === 'text' && {
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: theme.palette[color].light,
    },
  }),
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[color].main,
    color: theme.palette[color].contrastText,
    '&:hover': {
      backgroundColor: theme.palette[color].dark,
    },
  }),
}));

export const ComposerButton: React.FC<ComposerButtonProps> = ({ children, variant = 'contained', color = 'primary', disabled = false, onClick, ...props }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsProcessing(true);
    try {
      if (onClick) {
        onClick(e);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <StyledButton
      variant={variant}
      color={color}
      disabled={disabled || isProcessing}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
