import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from "react-json-pretty"


const { user, isAuthenticated } = useAuth0()

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (

    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProfileSO() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    isAuthenticated && (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {user.name}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {user.name}
        </DialogTitle>
        <DialogContent dividers>
      
          <img src={user.picture} alt={user.name} />
          <p>{user.email}</p>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
  )}


// import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
// import JSONPretty from "react-json-pretty"

// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0()

//     return (
//       isAuthenticated && (
//         <div>
//             <h1>{user.name}</h1>
//             <img src={user.picture} alt={user.name} />
//             <p>{user.email}</p>
//             {/* <JSONPretty data={user} /> */}
//             {/* {JSON.stringify(user, null, 2)} */}
//         </div>
//     )
//   )
// }

// export default Profile
