import React from 'react';
import Style from '../css/header.module.css';

function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.divlogo}>
        <h3>logo</h3>
      </div>
      <div className={Style.divpesquisa}>
        <input style={{width: '65%', height: '35%'}} type="search" name="pesquisa" id="pesquisa" />
        
      </div>
      <div className={Style.divusuario}>
        <button>Cadastrar</button>
        <button>Entrar</button>
      </div>
    </div>
  );
}

export default Header;
