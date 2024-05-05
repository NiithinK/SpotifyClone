import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import '../Button/Button.css'
export default function FeedButton() {
    const theme = useTheme();
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [open, setOpen] = useState(false);
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
               className='feedback'
               onClick={handleClickOpen}
               sx={{
                
               }}
            >
                Give Feedback
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Provide your feedback"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Full name"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email ID"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="subject"
                        label="Subject"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                <DialogActions>
                    <Button sx={{ color: 'white' }} variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'white', marginRight: "18px" }} type="submit" variant="contained">Submit Feedback</Button>
                </DialogActions>
                   

                    
                </DialogActions>
            </Dialog>
        </div>
    );
}
