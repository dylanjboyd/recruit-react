import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../user-context';

const NameDialog = () => {
  const { user, setUser } = React.useContext(UserContext);
  const [draftName, setDraftName] = React.useState('');

  return <Dialog open={!user.firstName}>
    <DialogTitle>Introduce Yourself</DialogTitle>
    <DialogContent>
      <TextField variant="outlined" value={draftName}
                 onChange={e => setDraftName(e.target.value)} label="First name"/>
    </DialogContent>
    <DialogActions>
      <Button color="secondary" onClick={() => setUser({ firstName: draftName })}
              disabled={!draftName}>Save</Button>
    </DialogActions>
  </Dialog>
};

export default NameDialog;