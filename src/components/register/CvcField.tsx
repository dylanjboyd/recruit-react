import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';

interface ICvcFieldProps {
  cvcError: string;
  cvc: string;
  setCvc: (cvc: string) => any;
}

const CvcField: React.FC<ICvcFieldProps> = (props) => {
  const { cvcError, cvc, setCvc } = props;

  return (

    <TextField label="CVC" fullWidth variant="outlined" value={cvc} error={!!cvcError}
               helperText={cvcError || 'On rear of card'} id="cvc"
               onChange={e => setCvc(e.target.value.replaceAll(/\D/g, ''))}
               inputMode="decimal"
               InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <LockOpenIcon/>
                   </InputAdornment>
                 )
               }}/>
  );
};

export default CvcField;