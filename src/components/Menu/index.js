import logo from '../../assets/logo-small.svg'; 
import { Home, Layout, User, Mail  } from 'react-feather';
import './style.scss';

const Menu = () => {

  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <nav className="main-nav">
        <ul className="main-nav__item">
          <li className="main-nav__item"><a href="#"><Home />Accueil</a></li>
          <li className="main-nav__item"><a href="#"><Layout />Portfolio</a></li>
          <li className="main-nav__item"><a href="#"><User />A propo</a></li>
          <li className="main-nav__item"><a href="#"><Mail />Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
