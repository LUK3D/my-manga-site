import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MangaCard from '../components/MangaCard';
import mangaData from '../data/mangaData.json';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [mangas, setMangas] = useState([]);
  const [popularMangas, setPopularMangas] = useState([]);

  useEffect(() => {
    // Carrega todos os mangás
    setMangas(mangaData.slice(0, 4)); // Exibe os 4 primeiros

    // Carrega mangás populares (exemplo com os 3 últimos)
    setPopularMangas(mangaData.slice(4));
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div className="container main-content">
        <section className="manga-section">
          <h2>Novos Capítulos de Mangá</h2>
          <div className="manga-list">
            {mangas.map(manga => (
              <div className="manga-card-container" key={manga.id}>
                <img src={manga.cover} alt={manga.title} className="manga-cover" />
                <div className="manga-info">
                  <h3>{manga.title}</h3>
                  <p>⭐ {manga.rating}</p>
                  <Link to={`/manga/${manga.id}/capitulo/${manga.latestChapter}`} className="chapter-link">
                    Capítulo {manga.latestChapter}
                  </Link>
                  <p>{manga.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="sidebar">
          <h3>Mangás Populares</h3>
          <div className="popular-list">
            {popularMangas.map(manga => (
              <div key={manga.id} className="popular-item">
                <img src={manga.cover} alt={manga.title} />
                <div className="popular-info">
                  <h4>{manga.title}</h4>
                  <p>⭐ {manga.rating}</p>
                  <span className="popular-chapter">
                    <span className="new-tag">NEW</span>
                    Capítulo {manga.latestChapter}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;