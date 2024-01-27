// components/Header.js
import React from 'react';
import Image from 'next/image';
import Style from '../css/header.module.css';
import Img from '../assets/images/logo.png'

function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.divlogo}>
        <Image src={Img} alt="logo" style={{ width: 'aito', height: 'auto' }} />
      </div>
      <div className={Style.divpesquisa}>
        <div className={Style.searchContainer}>
          <div className={Style.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <input className={Style.searchInput} type="search" name="pesquisa" id="pesquisa" placeholder="Pesquisar" />
        </div>
      </div>
      <div className={Style.divusuario}>
        <button className={Style.button}>Cadastrar</button>
        <button className={Style.button}>Entrar</button>
      </div>
    </div>
  );
}

export default Header;

