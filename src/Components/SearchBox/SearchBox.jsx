import { useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
function Searchbar  () {
  const theme = useTheme();
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
   

    return (
      <Box sx={{display:'flex', minWidth: isSmallScreen ?  '568px':'200px' , maxWidth: isSmallScreen ?  '200px':'568px',minHeight: isSmallScreen ?  '52px':'px'}}>
      <InputBase
          placeholder="Search a song of your choice"
          sx={{width:'100%', height:'48px', bgcolor:'white', py: '4px',pl: '15px', border: '1px solid black' , borderRadius: isSmallScreen ? '8px' : '8px', borderTopRightRadius:0, borderBottomRightRadius:0}}
      />
      <IconButton type="button" aria-label="search" sx={{height:'48px',px:'10px', bgcolor:'white', border:'1px solid black', borderRadius: isSmallScreen ? '8px' : '8px', borderTopLeftRadius:0, borderBottomLeftRadius:0, borderLeft:0}}>
          <SearchIcon/>
      </IconButton>
  </Box>
    );
}

export default Searchbar ;
