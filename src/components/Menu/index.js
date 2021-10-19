import logo from '../../assets/logo-small.png'; 

import './style.scss';

const Menu = () => {

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <nav className="main-nav">
        <ul className="main-nav__item">
          <li className="main-nav__item"><a href="#">Accueil</a></li>
          <li className="main-nav__item"><a href="#">Portfolio</a></li>
          <li className="main-nav__item"><a href="#">A propo</a></li>
          <li className="main-nav__item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
