import React, { useState } from "react";
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Automobile from './pages/automobile.jsx'
import Business from './pages/business.jsx';
import Entertainment from './pages/entertainment.jsx';
import Home from './pages/home.jsx';
import National from './pages/national.jsx'
import Science from './pages/science.jsx';
import Sports from './pages/sports.jsx';
import Technology from './pages/technology.jsx';
import World from './pages/world.jsx';
import Politics from './pages/politics.jsx'
import Title from "./components/title.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
 return <div>
 <BrowserRouter>
 <Title/>
  <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Automobile" element={<Automobile />} />
                <Route path="/Business" element={<Business />} />
                <Route path="/Entertainment" element={<Entertainment />} />
                <Route path="/National" element={<National />} />
                <Route path="/Science" element={<Science />} />
                <Route path="/Sports" element={<Sports />} />
                <Route path='/Technology' element={<Technology/>}/>
                <Route path='/World' element={<World/>}/>
                <Route path='/Politics' element={<Politics/>}/>
                <Route path="" element={<NotFound />} /> 
            </Routes>
        </BrowserRouter>
 </div>
}
function NotFound()
{
       return <>
       <h1>Try sometime else</h1>
       </>
}


export default App;
