import React from 'react';
import Style from '../css/submenu.module.css'; // Certifique-se de ter um arquivo CSS separado para os estilos

const SubMenu = () => {
  return (
    <nav className={Style.menu}>
      <ul>
        <li><a href="#">Home</a></li>
        <li className={Style.submenu}><a href="#">Gêneros</a>
          <ul>
            <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
        <li className={Style.submenu}><a href="#">Artistas</a>
          <ul>
          <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
        <li className={Style.submenu}><a href="#">Álbuns</a>
          <ul>
          <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
        <li className={Style.submenu}><a href="#">Eventos</a>
          <ul>
          <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
        <li className={Style.submenu}><a href="#">Notícias</a>
          <ul>
          <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
        <li className={Style.submenu}><a href="#">Contato</a>
          <ul>
          <li><a href="#">Rock</a></li>
            <li><a href="#">Pop</a></li>
            <li><a href="#">Eletrônica</a></li>
            <li><a href="#">Hip Hop</a></li>
            <li><a href="#">Jazz</a></li>
            <li><a href="#">Clássico</a></li>
            <li><a href="#">Blues</a></li>
            <li><a href="#">Country</a></li>
            <li><a href="#">R&B</a></li>
            <li><a href="#">Reggae</a></li>
            <li><a href="#">Funk</a></li>
            <li><a href="#">Metal</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SubMenu;
