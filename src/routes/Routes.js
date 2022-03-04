import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';



export const Router = () => (
    <Routes>
       <Route path="/" element={<Home/>} />
      {/* <Route path="/home" element={<Navbar/>} />
      <Route path="/games" element={<GamesPage/>} />
      <Route path="*" element={<NoticiasPage />} />
      <Route path="/games/detail/:id" element={<DetailGames/>} /> */}
    </Routes>
  );