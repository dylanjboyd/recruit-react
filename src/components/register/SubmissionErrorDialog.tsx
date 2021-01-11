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
  isSubmitting: boolean;
}

const ErrorSubmissionDialog: React.FC<IErrorSubmissionDialogProps> = (props) => {
  const {
    errorMessage, retry, clearErrorMessage, isSubmitting
  } = props;
  return (
    <Dialog open={!!errorMessage} maxWidth="sm" fullWidth>
      <DialogTitle>{isSubmitting ? 'Submitting...' : 'Failed to register card.'}</DialogTitle>
      <DialogContent>
        <DialogContentText>{isSubmitting ? 'This shouldn\'t take long.' : errorMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clearErrorMessage}>Cancel</Button>
        <Button onClick={retry} color="secondary">Retry</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorSubmissionDialog;