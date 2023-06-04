import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost, Bot } from './page';


const App = () => (
  <BrowserRouter>

{/* <div className='flex gap-x-4 '>
      <Link to="/images" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Images</Link>
      <Link to="/chatbot" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Chatbot</Link>

</div> */}
    {/* <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div> */}

      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/saved" element={<Home />} />
        <Route path="/ab" element={<Bot/>} />
      </Routes>
  
  </BrowserRouter>
);

export default App;
