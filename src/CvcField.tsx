import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';

const CvcField = () => {
  const [draftCvc, setDraftCvc] = React.useState('');
  const [cvcError, setCvcError] = React.useState('');

  return (
    <TextField label="CVC" fullWidth variant="outlined" value={draftCvc} error={!!cvcError}
               helperText={cvcError || 'On rear of card'}
               onFocus={() => setCvcError('')}
               onChange={e => setDraftCvc(e.target.value.replaceAll(/\D/g, ''))}
               inputMode="decimal"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <LockOpenIcon/>
                   </InputAdornment>
                 )
               }}/>
  );
}

export default CvcField;