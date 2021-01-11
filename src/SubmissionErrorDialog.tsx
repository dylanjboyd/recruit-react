import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IErrorSubmissionDialogProps {
  errorMessage: string;
  clearErrorMessage: () => any;
  retry: () => any;
}

const ErrorSubmissionDialog: React.FC<IErrorSubmissionDialogProps> = ({
                                                                        errorMessage,
                                                                        retry,
                                                                        clearErrorMessage
                                                                      }) => (
  <Dialog open={!!errorMessage}>
    <DialogTitle>Failed to register card.</DialogTitle>
    <DialogContent>
      <DialogContentText>{errorMessage}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={clearErrorMessage}>Cancel</Button>
      <Button onClick={retry} color="secondary">Retry</Button>
    </DialogActions>
  </Dialog>
);

export default ErrorSubmissionDialog;