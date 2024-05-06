// import React, { useState } from 'react';
// import Button from "@mui/material/Button";
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import '../Button/Button.css'
// import { Hidden } from '@mui/material';
// import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

// export default function FeedButton() {
//     const theme = useTheme();
    
//     const isSmallScreen = useMediaQuery(theme.breakpoints.up('sn'));
//     const [open, setOpen] = useState(false);
   

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div>
//             {/* <button
//                className='feedback'
//                onClick={handleClickOpen}
//             >
//                 Give Feedback
//             </button> */}
            
            
//                 <Button c variant="contained" onClick={handleClickOpen} 
//                         sx={{ color:'#34C94B',backgroundColor:'black',ml:'10px', mr: '20px', borderRadius: '8px',padding:isSmallScreen? '3px':'5px' }}>
//                     Give Feedback
//                 </Button>
           
            
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">{"Provide your feedback"}</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         name="name"
//                         label="Full name"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <TextField
//                         margin="dense"
//                         name="email"
//                         label="Email ID"
//                         type="email"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <TextField
//                         margin="dense"
//                         name="subject"
//                         label="Subject"
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <TextField
//                         margin="dense"
//                         name="description"
//                         label="Description"
//                         multiline
//                         rows={4}
//                         type="text"
//                         fullWidth
//                         variant="outlined"
//                     />
//                 </DialogContent>
//                 <DialogActions>
//                 <DialogActions>
//                     <Button sx={{ color: 'white' }} variant="contained" onClick={handleClose}>Cancel</Button>
//                     <Button sx={{ color: 'white', marginRight: "18px" }} type="submit" variant="contained">Submit Feedback</Button>
//                 </DialogActions>
                   

                    
//                 </DialogActions>
//             </Dialog>
           
//         </div>
//     );
// }
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
import { Hidden } from '@mui/material';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

export default function FeedButton() {
    const theme = useTheme();
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
   

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {isSmallScreen ? (
                <RateReviewOutlinedIcon 
                    onClick={handleClickOpen} 
                    sx={{ color:'#34C94B', ml: '10px',backgroundColor:'black',padding:'3px',width:'2rem' }} 
                />
            ) : (
                <Button 
                    variant="contained" 
                    onClick={handleClickOpen} 
                    sx={{ color:'#34C94B', backgroundColor:'black', ml:'10px', mr: '20px', borderRadius: '8px', padding: '3px' }}
                >
                    Give Feedback
                </Button>
            )}
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
                    <Button sx={{ color: 'white',backgroundColor:'#34C94B' }} variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'white', marginRight: "18px",backgroundColor:'#34C94B' }} type="submit" variant="contained">Submit Feedback</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

