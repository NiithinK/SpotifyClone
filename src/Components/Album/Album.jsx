import Navbar from '../Navbar/Navbar'
import { useParams, useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import './Album.css'
import { Icon } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hidden } from '@mui/material';
import Box from "@mui/material/Box";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AlbumHero from '../AlbumHero/AlbumHero';
import AlbumTable from '../AlbumTable/AlbumTable';



function msToHHMM(ms) {
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

export default function Album (){
    const navigate = useNavigate();
    let location = useLocation();
    let data = location.state.album;
    const isSmallScreen = useMediaQuery('(max-width:960px)');
   
    return <>
        <>
       <Navbar/>
       
        <div style={{ padding: isSmallScreen ? "30px 30px" : "30px 50px", backgroundColor: 'black' }} color="white">
            <Icon sx={{ color: 'white', paddingRight: "10px", paddingBottom: "20px", cursor: 'pointer' }}>
                <ArrowCircleLeftOutlinedIcon fontSize="large" onClick={() => navigate("/")} />
            </Icon>
           
   <AlbumHero data={data}/>
   <AlbumTable data={data}/>
            
        </div>
        </>
    </>
}