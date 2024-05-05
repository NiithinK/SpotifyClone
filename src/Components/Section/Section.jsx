// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Tooltip, colors } from '@mui/material';
import { Tab, Tabs } from '@mui/material';
import { useEffect } from 'react';
import './Section.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import AlbumCard from '../AlbumCard/AlbumCard';
import { useState } from 'react';

export default function Section({title = 'Title', items = [], type = 'album', tabs: Tabs }) {
    
  const [collapse, setCollapse] = useState(true);
  
  return (
<>
    <div className='title-button'>
            <h1>{title}</h1>
      <div className='buttonColl'>
        {title === "Songs" ? 
        <span></span>
        :
        <Button className='title-button'  onClick={() => setCollapse(!collapse)} sx={{color:'#34C94B'}}>
            {collapse ? 'Show All' : 'Collapse'}
        </Button>}
    </div>
</div>

{Tabs ? <Tabs /> : null}
<Swiper
      // install Swiper modules
      className='swiper'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        375: {
            slidesPerView: 2,
        },
        550: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 4,
        },
        868: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
        1220: {
            slidesPerView: 7,
        },
    }}
    >
      {collapse ? ( <Grid xs={6} sm={4} md={2.4} lg={1.7}>
               {items.map(album => (
                        <SwiperSlide key={album.id}>
                        <AlbumCard key={album.id} album={album} title={title} type={type}/>
                        </SwiperSlide>
                ))}
              </Grid>):
            (<Grid container rowSpacing={3}>
                      {items.map((album) => (
                          <Grid key={album.id} xs={6} sm={4} md={2.4} lg={1.7}>
                              <AlbumCard key={album.id} album={album} title={title} type={type}/>
                          </Grid>
                      ))}
                  </Grid>)}
    </Swiper>
</>
  );
 };
// 