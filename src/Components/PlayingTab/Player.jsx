// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import PauseCircleIcon from '@mui/icons-material/PauseCircle';
// import Box from '@mui/material/Box';
// import { useState } from 'react';
// import LinearProgress from '@mui/material/LinearProgress';
// import { useTheme } from "@emotion/react"
// import Typography from '@mui/material/Typography';
// import { Hidden } from '@mui/material';

// export const Player = () => {
//     const theme = useTheme();
//     const [isPlaying, setIsPlaying] = useState(false);
//     return <Box color='#34C94B' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px' }}>
//         {
//             !isPlaying ?
//                 <PlayCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(true)} />
//                 :
//                 <PauseCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(false)} />
//         }
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Typography variant="caption">0:38</Typography>
//             <Hidden mdUp>
//                 <div style={{ width: '30vw', paddingLeft: '6px', paddingRight: '6px' }}>
//                     <LinearProgress variant="determinate" value={30} />
//                 </div>
//             </Hidden>
//             <Hidden mdDown smDown>
//                 <div style={{ width: '45vw', paddingLeft: '6px', paddingRight: '6px' }}>
//                     <LinearProgress variant="determinate" value={30} />
//                 </div>
//             </Hidden>
//             <Typography variant="caption">3:38</Typography>
//         </Box>
//     </Box>
// }
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Box from '@mui/material/Box';
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from "@emotion/react"
import Typography from '@mui/material/Typography';
import { Hidden } from '@mui/material';

export const Player = () => {
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <Box color='#34C94B' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px' }}>
            {!isPlaying ? (
                <PlayCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(true)} />
            ) : (
                <PauseCircleIcon fontSize="large" color="white" onClick={() => setIsPlaying(false)} />
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="caption">0:38</Typography>
                <Hidden mdUp>
                    <div style={{ width: '30vw', paddingLeft: '6px', paddingRight: '6px' }}>
                        <LinearProgress variant="determinate" value={30} sx={{ color: '#34C94B' }} />
                    </div>
                </Hidden>
                <Hidden mdDown smDown>
                    <div style={{ width: '45vw', paddingLeft: '6px', paddingRight: '6px' }}>
                        <LinearProgress variant="determinate" value={30} sx={{ color: '#34C94B' }} />
                    </div>
                </Hidden>
                <Typography variant="caption">3:38</Typography>
            </Box>
        </Box>
    );
};
