import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TextField from '@material-ui/core/TextField';

const ExpiryField = () => {
  const [draftExpiry, setDraftExpiry] = React.useState('');
  const [expiryError, setExpiryError] = React.useState('');

  const setExpiryFromDisplay = (newValue: string) => {

    // Strip all non-digit values from display string
    newValue = newValue.replaceAll(/[^\d/]/g, '');

    setDraftExpiry(prevState => {
      if (prevState.length === 1 && newValue.length === 2) {
        return newValue + '/';
      }

      return newValue.substr(0, 7);
    });
  };

  return (
    <TextField label="Expiry" fullWidth variant="outlined" value={draftExpiry}
               onFocus={() => setExpiryError('')}
               error={!!expiryError} helperText={expiryError || 'MM/YYYY'}
               onChange={e => setExpiryFromDisplay(e.target.value)}
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