import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from './';
import { fetchFromApi } from "../utils/fetchFromApi";
import zIndex from "@mui/material/styles/zIndex";

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`).then(
            (data) => setChannelDetail(data?.items[0])
        );

        fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div 
                    style={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,116,0.9697128851540616) 40%, rgba(0,212,255,1) 100%)',
                        height: '300px',
                        zIndex: '10',
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
            </Box>

            <Box display='flex' p={2}>
                <Box sx={{
                    mr : {sm : '100px'}
                }} />
                <Videos videos={videos}/>
            </Box>
        </Box>
    );
};

export default ChannelDetail;