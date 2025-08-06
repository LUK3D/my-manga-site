import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chapterData from '../data/chapterData.json';
import './ReaderPage.css';

const ReaderPage = () => {
  const { mangaId, capituloId } = useParams();
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [mangaTitle, setMangaTitle] = useState('');

  useEffect(() => {
    // Busca os dados do capítulo com base nos parâmetros da URL
    const manga = chapterData[mangaId];
    if (manga && manga.chapters[capituloId]) {
      setMangaTitle(manga.title);
      setPages(manga.chapters[capituloId]);
    } else {
      // Caso o capítulo ou mangá não seja encontrado
      setMangaTitle('Mangá não encontrado');
      setPages([]);
    }
  }, [mangaId, capituloId]);

  const handlePrevChapter = () => {
    const prevChapterId = parseInt(capituloId, 10) - 1;
    // Lógica para verificar se o capítulo anterior existe
    if (chapterData[mangaId].chapters[prevChapterId]) {
      navigate(`/manga/${mangaId}/capitulo/${prevChapterId}`);
    }
  };

  const handleNextChapter = () => {
    const nextChapterId = parseInt(capituloId, 10) + 1;
    // Lógica para verificar se o próximo capítulo existe
    if (chapterData[mangaId].chapters[nextChapterId]) {
      navigate(`/manga/${mangaId}/capitulo/${nextChapterId}`);
    }
  };

  return (
    <div className="reader-page">
      <div className="reader-header">
        <h2>{mangaTitle} - Capítulo {capituloId}</h2>
        <div className="reader-controls">
          <button onClick={handlePrevChapter} disabled={!chapterData[mangaId]?.chapters[parseInt(capituloId, 10) - 1]}>
            ← Capítulo Anterior
          </button>
          <button onClick={handleNextChapter} disabled={!chapterData[mangaId]?.chapters[parseInt(capituloId, 10) + 1]}>
            Capítulo Próximo →
          </button>
        </div>
      </div>
      <div className="reader-images">
        {pages.length > 0 ? (
          pages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Página ${index + 1}`} className="reader-image" />
          ))
        ) : (
          <p>Não há páginas para este capítulo.</p>
        )}
      </div>
    </div>
  );
};

export default ReaderPage;