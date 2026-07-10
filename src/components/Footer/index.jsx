// == Import
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => {

  return (
      <footer className="footer">
        <nav className="footer__main-nav">
            <ul className="footer__list">
                <li className="footer__item">© Felipe Brando 2021</li>
                <li className="footer__item">
                  <NavLink
                    to='/mentions-legales'
                    exact
                  >
                    Mentions Légales
                  </NavLink>
                </li>
            </ul>
        </nav>
      </footer>
  );
};

export default Footer;
