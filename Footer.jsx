import React from 'react';
import './Footer.css';

const Footer = ({ logoUrl, email = 'contato@ceap.org.br', fraseApresentacao = 'Promovendo o desenvolvimento e apoio comunitário.' }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Coluna 1: Logo e Apresentação */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            {logoUrl ? (
              <img src={logoUrl} alt="CEAP Logo" className="logo-img" />
            ) : (
              <div className="logo-placeholder">
                <span className="logo-icon">C</span>
                <span className="logo-text">CEAP</span>
              </div>
            )}
          </div>
          <p className="footer-description">{fraseApresentacao}</p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-column">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-column">
          <h4 className="footer-title">Contato</h4>
          <ul className="footer-info">
            {email && (
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
            <li>
              <a href="tel:+553288447145">(32) 8844-7145</a>
            </li>
            <li className="footer-address">
              R. Dr. Henrique Burnier, 304 - Mariano Procópio, Juiz de Fora - MG, 36080-150
            </li>
          </ul>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="footer-column">
          <h4 className="footer-title">Redes sociais</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/ceamoraoproximojf?xtok=dm5zNnBsNDR4a2xh" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ceapjf/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/553288447145" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CEAP. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;