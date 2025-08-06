import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">Nox Scan</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#romance">Romance</a></li>
            <li><a href="#shoujo">Shoujo</a></li>
            <li><a href="#drama">Drama</a></li>
            <li><a href="#comedia">Comédia</a></li>
            <li><a href="#fantasia">Fantasia</a></li>
            <li><a href="#mais">Mais</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." className="search-input" />
          <a href="#login" className="login-btn">Entrar</a>
        </div>
      </div>
    </header>
  );
};

export default Header;