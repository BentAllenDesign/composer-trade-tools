import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { setAccountContext, useAccountContext } from '../../state/global/AccountContext';

export const AccountSelector: React.FC = () => {
  const { accounts, activeAccountNumber } = useAccountContext();

  const onAccountSelectorChange = React.useCallback((event: SelectChangeEvent<string>) => {
    setAccountContext({ ...accounts, activeAccountNumber: event.target.value });
  }, [accounts]);

  return (
    <FormControl className='min-w-[150px] !my-2' size='small'>
      <InputLabel id="demo-simple-select-disabled-label">Account</InputLabel>
      <Select
        labelId="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        value={activeAccountNumber || 'oops'}
        label="Account"
        onChange={onAccountSelectorChange}
      >
        <MenuItem value={'oops'}>No accounts found</MenuItem>
        {accounts?.map(account => (
          <MenuItem key={account.account_number} value={account.account_number}>{account.account_type}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};