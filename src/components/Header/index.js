import React from 'react';

import profile from '../../assets/my_profile.jpg';
import './style.css';

function Header() {
  return (
    <header>
      <h1>facebook</h1>
      <div>
        <a href="https://www.facebook.com/igor.araujo.1276" target="_blank">Meu Perfil</a>
        <img src={profile} alt=""/>
      </div>
    </header>
  );
}

export default Header;
