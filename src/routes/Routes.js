import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Topbar } from '../components/Topbar';



export const Router = () => (
    <Routes>
       <Route path="/" element={<Topbar/>} />
      {/* <Route path="/home" element={<Navbar/>} />
      <Route path="/games" element={<GamesPage/>} />
      <Route path="*" element={<NoticiasPage />} />
      <Route path="/games/detail/:id" element={<DetailGames/>} /> */}
    </Routes>
  );