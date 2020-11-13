import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  const onConfirm = props.onConfirm;
  const title = props.title;
  const content = props.content;
  const btnClass = props.btnClass;
  const btnContent = props.btnContent;
  const confirmText = props.confirmText;
  const cancelText = props.cancelText;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <button className={btnClass} onClick={handleClickOpen}>{btnContent}</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          {cancelText ? cancelText : "Cancel"}  
          </Button>
          <Button onClick={() => { handleClose(); onConfirm() }} color="primary">
            {confirmText ? confirmText : "Agree"}  
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}