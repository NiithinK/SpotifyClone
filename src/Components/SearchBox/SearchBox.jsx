// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import { Typography, useMediaQuery, Grid } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import styles from "./Search.modules.css";
// import Paper from '@mui/material/Paper';

// function Searchbar({ data }) {
//     const theme = useTheme();
//     const [value, setValue] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//     const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));

//     const handleChange = (e) => {
//         const inputValue = e.target.value.toLowerCase();
//         setValue(inputValue);

//         const filteredData = data.filter(album => album.title.toLowerCase().includes(inputValue));
//         setSearchResults(filteredData);
//     };

//     return (
//         <>
//              <Box sx={{
//                 display: 'flex',
//                 minWidth: isSmallScreen ? '568px' : '200px',
//                 maxWidth: isSmallScreen ? '200px' : '568px',
//                 minHeight: isSmallScreen ? '52px' : 'px',
//                 marginBottom: '20px', // Added margin for spacing between search bar and results
//             }}>
//                 <InputBase
//                     placeholder="Search a song of your choice"
//                     onChange={handleChange}
//                     value={value}
//                     sx={{
//                         width: '100%',
//                         height: '48px',
//                         bgcolor: 'white',
//                         py: '4px',
//                         pl: '15px',
//                         border: '1px solid black',
//                         borderRadius: isSmallScreen ? '8px' : '8px',
//                         borderTopRightRadius: 0,
//                         borderBottomRightRadius: 0,
//                         marginTop:'13px'
//                     }}
//                 />
//                 <IconButton type="button" aria-label="search" sx={{
//                     background: 'white',
//                     height: '48px',
//                     px: '10px',
//                     bgcolor: 'white',
//                     border: '1px solid black',
//                     borderRadius: isSmallScreen ? '8px' : '8px',
//                     borderTopLeftRadius: 0,
//                     borderBottomLeftRadius: 0,
//                     borderLeft: 0,
//                     marginTop:'13px'
//                 }}>
//                     <SearchIcon />
//                 </IconButton>
//             </Box>
//             {/* Render search results */}
//             {value.length > 0 && 
//                 <Paper sx={{
//                     position: 'absolute',
//                     top: 'calc(9% + 10px)',
//                     width: isSmallScreen ? '600px' : '300px',
//                     zIndex: '999',
//                     background: 'black',
//                     color: 'white',
//                     border: '1px solid  #34C94B',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     borderRadius: '10px',
//                 }}>
//                     {!searchResults.length ? (
//               <Typography sx={{
//                 color:'red',
//                 fontSize:isSmallScreen ? '60px' : '30px',
//                 width: isSmallScreen ? '600px' : '300px',
//                 height:isSmallScreen ? '300px' : '100px',
//                 display:'flex',
//                 justifyContent:'center',
//                 alignItems:'center'
//               }}>No match Found</Typography>
//             ):(
//               searchResults.map((album, index) => (
//                 <Box key={index} sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     marginBottom: '5px', // Added margin for spacing between search results
//                     padding: '5px',

//                     borderRadius: '8px',
//                 }}>
//                     <img src={album.image} alt={album.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
//                     <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>{album.title}</p>
//                     {/* Add your follow button here */}
//                     <p style={{ marginLeft: 'auto', color: 'white', border: 'none', borderRadius: '5px', padding: '5px ', fontSize: '18px', }}>{album.follows}  Follow</p>
//                 </Box>
//             ))
//             )}
//                 </Paper>
//             }
//         </>
//     );
// }

// export default Searchbar;import { useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from "./Search.modules.css";
import Paper from '@mui/material/Paper';
import { useState } from 'react';
function Searchbar({ data }) {
    const theme = useTheme();
    const [value, setValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setValue(inputValue);

        const filteredData = data.filter(album => album.title.toLowerCase().includes(inputValue));
        setSearchResults(filteredData);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                ml: '20px',
                mt:'10px',
                minWidth: isSmallScreen ? '568px' : '200px',
                maxWidth: isSmallScreen ? '200px' : '568px',
                minHeight: isSmallScreen ? '52px' : 'px',
                marginBottom: '20px', // Added margin for spacing between search bar and results
            }}>
                <InputBase
                    placeholder= "Search a song of your choice"
                    onChange={handleChange}
                    value={value}
                    sx={{
                        width: '100%',
                        height: '48px',
                        bgcolor: 'white',
                        py: '4px',
                        pl: '15px',
                        border: '1px solid black',
                        borderRadius: isSmallScreen ? '8px' : '8px',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        marginTop:'13px'
                    }}
                />
                <IconButton type="button" aria-label="search" sx={{
                    background: 'white',
                    height: '48px',
                    px: '10px',
                    bgcolor: 'white',
                    border: '1px solid black',
                    borderRadius: isSmallScreen ? '8px' : '8px',
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeft: 0,
                    marginTop:'13px'
                }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* Render search results */}
            {value.length > 0 &&
                <Paper sx={{
                    position: 'absolute',
                    top: 'calc(9% + 10px)',
                    width: isSmallScreen ? '600px' : '300px',
                    zIndex: '999',
                    background: 'black',
                    color: 'white',
                    border: '1px solid  #34C94B',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '10px',
                }}>
                    {!searchResults.length ? (
                        <Typography sx={{
                            color: 'red',
                            fontSize: isSmallScreen ? '30px' : '20px',
                            textAlign: 'center',
                            padding: '20px',
                        }}>No match Found</Typography>
                    ) : (
                        <Grid container direction="column" alignItems="center" spacing={2} sx={{ padding: '10px' }}>
                            {searchResults.map((album, index) => (
                                <Grid item key={index} container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <img src={album.image} alt={album.title} style={{ width: '20px', height: '20px' }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>{album.title}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2">{album.follows} Follow</Typography>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Paper>
            }
        </>
    );
}

export default Searchbar;
