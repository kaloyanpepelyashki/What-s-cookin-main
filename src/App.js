import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/onboarding/Landing';
import Landing2 from './pages/onboarding/Landing2';
import Landing3 from './pages/onboarding/Landing3';
import Landing4 from './pages/onboarding/Landing4';
import Landing5 from './pages/onboarding/Landing5';
import Landing6 from './pages/onboarding/Landing6';
import List from "./pages/List";
import Discount from "./pages/Discount";
import Profile from "./pages/Profile"


function App() {
  return (
    <div>
     <Routes>
     <Route path="/whats-cookin/" element={<Landing />} />
     <Route path="/landing2" element={<Landing2 />} />
     <Route path="/landing3" element={<Landing3 />} />
     <Route path="/landing4" element={<Landing4 />} />
     <Route path="/landing5" element={<Landing5 />} />
     <Route path="/landing6" element={<Landing6 />} />
     <Route path="/home" element={<Home />} />
     <Route path="/list" element={<List />} />
     <Route path="/discount" element={<Discount />} />
     <Route path="/profile" element={<Profile />} />
     </Routes>
    </div>
  );
}

export default App;
