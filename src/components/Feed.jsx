import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {

    const date = new Date();

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    // useEffect is LifeCycle Hook that gets triggered as soon as the component loads
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
    }, [selectedCategory]);

    return (
    <Stack 
        sx={
                {
                    // Here we are making direction dynamic by default direction will be column but when it is on medium and larger devices it will change to row
                    flexDirection: {sx: "column", md: "row"}
                }
            }
    >
        <Box
            sx={
                    { 
                        // Here we are making it dynamic by default height will be auto but when it is on medium and larger devices it will change to 92 vertical height
                        height : {sx : 'auto', md: '92vh'}, 
                        borderRight: '1px solid #3d3d3d',
                        // px : padding horizontal
                        px: {sx: 0, md: 2}
                    }
                }
        >
            <SideBar 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <Typography
                className='copyright'
                variant='body2'
                sx={{mt: 1.5, color: '#fff'}}
            >
                {/* Typography is just a simple component used for all text elements */}
                Copyright {date.getFullYear()} uViewTube
            </Typography>
        </Box>

        <Box
            p={2}
            sx={{
                overflow: 'auto',
                height: '90vh',
                flex: 2
            }}
        >
            <Typography
                variant='h4'
                fontWeight="bold"
                mb={2}
                sx={{color: 'white'}}
            >
                {selectedCategory} <span
                    style={{color: '#F31503'}}
                >
                    videos
                </span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    </Stack>
    );
};

export default Feed;