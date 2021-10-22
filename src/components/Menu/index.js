import smallLogo from '../../assets/logo-small.svg'; 
import normalLogo from '../../assets/logo.svg';

import MenuList from './MenuList';
import './style.scss';

const Menu = () => {

  return (
    <header className="header">
      <div className="logo-container">
        <img src={smallLogo} className="logo-small" alt="logo" />
        <img src={normalLogo} className="logo-normal" alt="logo" />
      </div>
      <nav className="main-nav">
        <MenuList />
      </nav>
    </header>
  );
};

export default Menu;
