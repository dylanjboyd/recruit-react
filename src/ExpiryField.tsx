import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import ScheduleIcon from '@material-ui/icons/Schedule';
import TextField from '@material-ui/core/TextField';

interface IExpiryFieldProps {
  expiryError: string;
  setExpiryMonth: (month: number) => any;
  setExpiryYear: (year: number) => any;
}

const ExpiryField: React.FC<IExpiryFieldProps> = (props) => {
  const { expiryError, setExpiryMonth, setExpiryYear } = props;
  const [draftExpiry, setDraftExpiry] = React.useState('');
  const setExpiryFromDisplay = (newValue: string) => {

    // Strip all non-digit values from display string
    newValue = newValue.replaceAll(/[^\d/]/g, '')
      .replaceAll('//', '/');

    setDraftExpiry(prevState => {
      if (prevState.length === 1 && newValue.length === 2) {
        return newValue + '/';
      }

      const finalString = newValue.substr(0, 7);
      const splitString = newValue.split('/');
      setExpiryMonth(Number(splitString[0]) || -1);
      setExpiryYear(splitString.length > 1 ? Number(splitString[1]) : -1);
      return finalString;
    });
  };

  return (
    <TextField label="Expiry" fullWidth variant="outlined" value={draftExpiry}
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