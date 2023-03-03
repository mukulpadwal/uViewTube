import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos, direction}) =>{

    if(!videos?.length) {
        return "Loading...";
    }

    return (
        <Stack
            direction={direction || 'row'}
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {videos.map((video, idx) => {
                return (<Box
                    key={idx}
                >
                    {/* Here we have a ambiguity that we can get 2 type of things as return value so we need to create 2 type of cards 1st can be the channelInfo and 2nd could be the video itself */}
                    {/* This logic is if we get video as return */}
                    {video.id.channelId && <ChannelCard channelDetail={video} />}
                    {video.id.videoId && <VideoCard video={video} />}
                    {/* {console.log(video.id.videoId)} */}
                </Box>);
            })}
        </Stack>
        );  
};

export default Videos;