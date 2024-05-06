import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Section from '../Section/Section';
import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';
import SearchBox from '../SearchBox/SearchBox';
import { Hero } from '../Hero/Hero';

function Home() {
    const [tabs, setTabs] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [selectedTab, setSelectedTab] = useState('all');
    const [filteredSongs, setFilteredSongs] = useState([]);

    const fetchTopAlbums = async () => {
        try {
            const res = await fetch(`https://qtify-backend-labs.crio.do/albums/top`);
                const data = await res.json();
                setTopAlbums(data);
          
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNewAlbums = async () => {
        try {
            const res = await fetch(`https://qtify-backend-labs.crio.do/albums/new`);
            const data = await res.json();
                setNewAlbums(data);
            
        } catch (error) {
            console.log(error);
        }
    };

    const fetchSongs = async () => {
        try {
            const res = await fetch(`https://qtify-backend-labs.crio.do/songs`);
            const data = await res.json();
           
                setSongs(data);
                setFilteredSongs(data);
           
        } catch (error) {
            console.log(error);
        }
    };



    const filterSongs = (tab) => {
        setFilteredSongs(() => [...(tab === 'all' ? songs : songs.filter((song) => song.genre.key === tab))]);
    };

    const handleTabChange = (e, newValue) => {
        setSelectedTab(newValue);
        filterSongs(newValue);
    };

   const fetchTabs = async () => {
        try {
            const res = await fetch(`https://qtify-backend-labs.crio.do/genres`);
            const data = await res.json();
          
                setTabs(data.data);
           
        } catch (error) {
            console.log(error);
        }
    };
    const songTabs = () => {
        return (
            <Tabs
                value={selectedTab}
                sx={{
                    marginBottom: '1.5rem',
                    '& button': { color: 'white !important', textTransform: 'capitalize' },
                }}
                onChange={handleTabChange}
                aria-label='wrapped label tabs example'
            >
                <Tab value='all' label='All' />
                {tabs.map((tab) => (
                    <Tab key={tab.key} value={tab.key} label={tab.label} />
                ))}
            </Tabs>
        );
    };
    useEffect(() => {
        try {
            fetchTabs();
            fetchNewAlbums();
            fetchTopAlbums();
            fetchSongs();
        } catch (error) {
            console.log(error);
        }
    }, []);
    const type ="song";
   
    return (
        <main>
          <Navbar data={topAlbums.concat(newAlbums)} page="home"/>
          <Hero/>
           
            <section>
                <Section title='Top Albums' items={topAlbums} />
                <Section title='New Albums' items={newAlbums} />
                <Section title='Songs' type={type} items={filteredSongs} tabs={songTabs} />
            </section>
           
        </main>
    );
}

export default Home;
