import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { useParams, useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Icon } from "@mui/material";
import { Hidden } from '@mui/material';
import Box from "@mui/material/Box";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function minToHour(ms) {
    // Convert milliseconds to total seconds
    const totalSeconds = Math.floor(ms / 1000);
    
    // Calculate hours and remaining seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    // Create the formatted string
    let formattedTime = '';
    if (hours > 0) {
      formattedTime += `${hours} hr `;
    }
    if (minutes > 0) {
      formattedTime += `${minutes} min`;
    }
  
    return formattedTime.trim();
  }
export default function AlbumHero({data}){

    const isSmallScreen = useMediaQuery('(max-width:960px)');
    let totalDuration = 0;
    data?.songs.forEach((song) => {
        totalDuration += song.durationInMs;
    })
    const totalDurationFormatted = minToHour(totalDuration);




    return (
       <>
       <Grid container rowSpacing={0} color={"white"} width={"100%"} padding={"10px 20px"}
        alignItems="center"
        sx={{ justifyContent: isSmallScreen ? 'center' : 'flex-start' }}
    >
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '250px', height: '250px', overflow: 'hidden', borderRadius: '10px' }}>
                <img
                    src={data?.image}
                    alt="song"
                    style={{ width: '250px', height: 'auto' }}
                />
            </div>
        </Grid>
        <Grid sx={{ justifyContent: 'center', maxWidth: '500px' }}>
            <Typography variant='h4' sx={{ fontWeight: 600, paddingBottom: '8px', paddingTop: isSmallScreen && '20px' }}>
                {data?.title}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 500, paddingBottom: '8px' }}>
                {data?.description}
            </Typography>
            
            <Typography variant='subtitle1' sx={{ fontWeight: 500, paddingBottom: '8px' }}>
                {data?.songs.length} Songs  {totalDurationFormatted}  {data?.follows} Follows
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: isSmallScreen && 'center' }}>
                <Button variant="contained" startIcon={<ShuffleIcon />} sx={{ borderRadius: '8px', backgroundColor: '#35C94B', color: 'white' }}>
                    Shuffle
                </Button>
                <Button variant="outlined" startIcon={<LibraryAddIcon />} sx={{ borderRadius: '8px', color:'#35C94B'}}>
                    Add to library
                </Button>
            </Stack>
        </Grid>
        </Grid>
       </>
    )
}