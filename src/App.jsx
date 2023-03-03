import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system"; // A box is nothing more but a simple div element

// This way of importing our components is very cluttery so inside components folder we create a index.js file and using that we call all these components in one line
// import Navbar from "./components/Navbar";
// import Feed from "./components/Feed";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
);


export default App;