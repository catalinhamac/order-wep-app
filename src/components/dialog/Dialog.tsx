import React from 'react';
import Button from '@material-ui/core/Button';
import {Dialog as MuiDialog, DialogProps} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const testId = "dialogTestId";
export const title = "Confirm order delete";
export const text = "Are you sure that you want to delete this order?";

export enum Confirm {
    Delete = 'Delete',
    Leave = 'Leave'
}

type Props = DialogProps & {handleClose: (confirmation: string) => void}

export const Dialog = (props: Props) => {
    const {handleClose, ...rest} = props;

    return (
        <MuiDialog
        data-testid={testId}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(Confirm.Delete)} color="primary">
            {Confirm.Delete}
          </Button>
          <Button onClick={() => handleClose(Confirm.Leave)} color="primary" autoFocus>
            {Confirm.Leave}
          </Button>
        </DialogActions>
      </MuiDialog>
    )
}
