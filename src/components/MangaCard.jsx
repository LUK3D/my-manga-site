import React from 'react';
import { Link } from 'react-router-dom';
import './MangaCard.css';

const MangaCard = ({ manga }) => {
  return (
    // Link para a página de detalhes do mangá
    <Link to={`/manga/${manga.id}`}>
      <div className="manga-card">
        {/* ... conteúdo do card ... */}
        <div className="manga-chapters">
          {/* Link para o capítulo mais recente */}
          <Link to={`/manga/${manga.id}/capitulo/${manga.latestChapter}`} className="chapter-link">
            Capítulo {manga.latestChapter}
          </Link>
        </div>
        {/* ... */}
      </div>
    </Link>
  );
};

export default MangaCard;