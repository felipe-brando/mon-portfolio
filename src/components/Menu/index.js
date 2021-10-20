import smallLogo from '../../assets/logo-small.svg'; 
import normalLogo from '../../assets/logo.svg'; 
import { Home, Layout, User, Mail  } from 'react-feather';
import './style.scss';

const Menu = () => {

  return (
    <header className="header">
      <div className="logo-container">
        <img src={smallLogo} className="logo-small" alt="logo" />
        <img src={normalLogo} className="logo-normal" alt="logo" />
      </div>
      <nav className="main-nav">
        <ul className="main-nav__item">
          <li className="main-nav__item"><a className="main-nav__itemLink" href="#"><Home /><span className="main-nav__itemName">Accueil</span></a></li>
          <li className="main-nav__item"><a className="main-nav__itemLink" href="#"><Layout /><span className="main-nav__itemName">Portfolio</span></a></li>
          <li className="main-nav__item"><a className="main-nav__itemLink" href="#"><User /><span className="main-nav__itemName">A propo</span></a></li>
          <li className="main-nav__item"><a className="main-nav__itemLink" href="#"><Mail /><span className="main-nav__itemName">Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
