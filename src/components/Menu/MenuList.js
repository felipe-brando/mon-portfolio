// == Import
import { NavLink } from "react-router-dom";
import { Home, Layout, User, Mail } from 'react-feather';

// == Composant
const MenuList = ({closeMobileMenu}) => {
    return (
      <ul className="main-nav__liste">
        <li className="main-nav__item">
          <NavLink 
            onClick={closeMobileMenu}
            to="/" 
            className="main-nav__itemLink" 
            exact
          >
            <Home /><span className="main-nav__itemName">Accueil</span>
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink 
            onClick={closeMobileMenu}
            to="/portfolio" 
            className="main-nav__itemLink" 
            exact
          >
            <Layout /><span className="main-nav__itemName">Portfolio</span>
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            onClick={closeMobileMenu} 
            to="/a-propos" 
            className="main-nav__itemLink" 
            exact
          >
            <User /><span className="main-nav__itemName">A propo</span>
          </NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink
            onClick={closeMobileMenu} 
            to="/contact" 
            className="main-nav__itemLink" 
            exact
          >
            <Mail /><span className="main-nav__itemName">Contact</span>
          </NavLink>
        </li>
      </ul>  
    );
  };

  // == Export
  export default MenuList;