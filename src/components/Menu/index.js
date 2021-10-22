// == Import
import { useSelector, useDispatch } from 'react-redux';
import { Menu as BurgerIcon, X } from 'react-feather';

import smallLogo from '../../assets/logo-small.svg';
import normalLogo from '../../assets/logo.svg';
import MenuList from './MenuList';
import './style.scss';

const Menu = () => {
  const burgerIsOpen = useSelector((state) => state.burgerMenu.burgerOpen);
  console.log(burgerIsOpen);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'BURGER_TOGGLE_OPEN',
    });
  };

  const closeMobileMenu = () => {
    dispatch({
      type: 'MOBILE_MENU_CLOSE',
    })
  }

  return (
    <>
      <button className="bureger__btn" onClick={handleClick}>
        {burgerIsOpen ? <X /> : <BurgerIcon />}
      </button>
      <header className={burgerIsOpen ? "header open" : "header"}>
          <div className="logo-container">
            <img src={smallLogo} className="logo-small" alt="logo" />
            <img src={normalLogo} className="logo-normal" alt="logo" />
          </div>
          <nav className="main-nav">
            <MenuList closeMobileMenu={closeMobileMenu} />
          </nav>
        </header>
    </>
  );
};

export default Menu;
