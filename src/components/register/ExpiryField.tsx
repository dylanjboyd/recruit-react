import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TextField from '@material-ui/core/TextField';

interface IExpiryFieldProps {
  expiryError: string;
  expiry: string;
  setExpiry: (newExpiry: string) => any;
}

const ExpiryField: React.FC<IExpiryFieldProps> = (props) => {
  const { expiryError, expiry, setExpiry } = props;

  return (
    <TextField label="Expiry" fullWidth variant="outlined" value={expiry}
               error={!!expiryError} helperText={expiryError || 'MM/YYYY'}
               onChange={e => setExpiry(e.target.value)} id="expiry" color="secondary"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <ScheduleIcon/>
                   </InputAdornment>
                 )
               }}/>
  );
};

export default ExpiryField;