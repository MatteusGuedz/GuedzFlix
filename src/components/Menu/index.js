import React from 'react';
import Logo  from '../../assets/logo.png';
import  './styles.css';

function Menu() {
  return (
    <nav className="Menu">



      <a href="/">
         <img class="logo-tipo" src={Logo} alt="GuedzFlix - Logo"/>
      </a>



      <a href="/"  className="ButtonLink">
        Novo Video  
      </a>
    </nav>
  );
}

export default Menu;