import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from "react";
import { CurrentSongContext } from "../context/ContextForCurrentSong";
import logo from '../../assets/logo.png';

export const SongCard = () => {
    
    
   
    return <Box color="white" display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} width={"200px"} padding={"16px"}>
            <div style={{ width: '60px', height: '60px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
               <img src={logo} alt="" style={{ width: '100px', height: '50px'}}/>
            </div>
            <Stack>
                <Typography variant="body1">
                Brown Sugar
                </Typography>
                <Typography variant="caption">
                 Boyd Bogisich PhD, Sadie Walker
                </Typography>
            </Stack>
        </Box>
    // </div>
}