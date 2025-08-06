import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReaderPage from './pages/ReaderPage'; // Novo componente
import './assets/styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rota para a página de leitura */}
        <Route path="/manga/:mangaId/capitulo/:capituloId" element={<ReaderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;