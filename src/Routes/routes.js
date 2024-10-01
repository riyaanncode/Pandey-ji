import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from '../Component/indexPage';
import Navbar from '../Component/navbar';
import Home from '../Component/Home';
import  Experiance from '../Component/Experiance'
import Skills from '../Component/Skills';
import Projects from '../Component/Projects';
import Contact from '../Component/Contact'

const RoutesPage = () => {
  return (
    <>
       {/* Navbar is present on all pages */}
       <Navbar />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path='Experiance' element={<Experiance/>}/>
        <Route path="/index" element={<IndexPage />} />
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default RoutesPage;


