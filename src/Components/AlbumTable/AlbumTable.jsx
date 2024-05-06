import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function msToMinSec(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    return formattedTime;
}
export default function AlbumTable({data}) {
    console.log(data)
  return (
    <TableContainer component={Paper} sx={{ marginTop: "40px", marginBottom: '80px', backgroundColor: 'black' }}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
        <TableRow>
                        <TableCell sx={{ color: 'white' }}>Title</TableCell>
                        <TableCell sx={{ color: 'white' }}>Arist</TableCell>
                        <TableCell sx={{ color: 'white' }}>Duration</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {data.songs.map((song) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer'  }}
            >
              
              <TableCell sx={{ color: 'white' }} component="th" scope="row">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', overflow: 'hidden', position: 'relative', borderRadius: '10px' }}>
                                        <img
                                            src={song.image}
                                            alt={song.title}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div style={{ paddingLeft: "15px" }}>
                                        {song.title}
                                    </div>
                                </div>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{song.artists.join(", ")}</TableCell>
             <TableCell sx={{ color: 'white' }}>{msToMinSec(song.durationInMs)}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
