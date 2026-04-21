import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';


import { ThemeProvider } from './theme/theme';


import Home from './pages/home/Home'; 
import Brief from './pages/breif/breif'; 
import Dbudget from './pages/detail/Dbudget';
import Droadmap from './pages/detail/Droadmap';
import Dgrowth from './pages/detail/Dgrowth';
import Dlocations from './pages/detail/Dlocations';
import Ideas from './pages/ideas/Ideas';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import SavedIdeas from './pages/saved/SavedIdeas'; 

function App() {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          
          <Route path="/login" element={userInfo ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={userInfo ? <Navigate to="/" /> : <Signup />} />



          <Route path="/" element={userInfo ? <Home /> : <Navigate to="/login" />} />
          <Route path="/ideas" element={userInfo ? <Ideas /> : <Navigate to="/login" />} />
          

          <Route path="/saved-ideas" element={userInfo ? <SavedIdeas /> : <Navigate to="/login" />} />
          
          <Route path="/breif" element={userInfo ? <Brief /> : <Navigate to="/login" />} />
          <Route path="/detail/Dbudget" element={userInfo ? <Dbudget /> : <Navigate to="/login" />} />
          <Route path="/detail/Dgrowth" element={userInfo ? <Dgrowth /> : <Navigate to="/login" />} />
          <Route path="/detail/Dlocations" element={userInfo ? <Dlocations /> : <Navigate to="/login" />} />
          <Route path="/detail/Droadmap" element={userInfo ? <Droadmap /> : <Navigate to="/login" />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;