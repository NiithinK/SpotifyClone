import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import { Tooltip } from '@mui/material';
import {useNavigate} from "react-router-dom"
import './AlbumCard.css'
const AlbumCard = ({album ,title,type}) => {
  
  const navigate = useNavigate();
  return (
    <Tooltip
    title={album.title}
    placement="top"
    arrow
    display="flex"
    justifyContent="center"
    
>
  
  <Box sx={ {                   width: '160px',
                                height: '210px',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                marginLeft:'10px',
                                marginRight:'10px'
                                
                }} onClick={() =>
                  title != "Songs" &&
                  navigate(`/album/${album.slug}`, { state: { album: album } })
                }>

                  <img src={album.image }alt={album.title}  style={{
                                    width: '100%',
                                    height: '84%',
                                    objectFit: 'cover',
                                }}/>  
                 <Box display="flex" alignItems="center" sx={{ backgroundColor: "white", height: '16%' }}>
                     <Chip size="small" label={title === 'Songs' ?album.likes + ' likes' :album.follows +' follows'} sx={{ color: 'white', ml: '10px', background:'black', fontSize: '9px' }} />
                 </Box>
     </Box>


     <Typography variant="body2" sx={{ pt: '5px', pb: '10px', width: '160px',color:'white', marginLeft:'20px',
                                marginRight:'20px',display: 'flex',justifyContent: 'space-between' }}>
                            {album.title}
                        </Typography>
  
   </Tooltip>
  );
}

export default AlbumCard;