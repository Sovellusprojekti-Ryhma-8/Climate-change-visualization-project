import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import N1 from './components/N1';
import N2 from './components/N2';
import N3 from './components/N3';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import LuoVisualisointinäkymä from './components/LuoVisualisointinäkymä';
import DeleteUser from './components/DeleteUser';
import { Routes, Route } from 'react-router-dom';


function App() {
 return (
  <>
  
    <Navbar />
    <Header />
    <div class='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/N1" element={<N1 />} />
        <Route path="/N2" element={<N2 />} />
        <Route path="/N3" element={<N3 />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/LuoVisualisointinäkymä" element={<LuoVisualisointinäkymä />} />
        <Route path="/DeleteUser" element={<DeleteUser />} />
        </Routes>
      </div>
    <Footer />
  </>
 );
}

export default App;
