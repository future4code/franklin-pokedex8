import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { PokedexPage } from '../pages/PokedexPage/PokedexPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemons/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
