import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Menu from '../../components/Menu';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';
import NotFound from '../../components/NotFound';
import CookieConsent from "react-cookie-consent";

import './style.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
        type: 'FETCH_WORKS',      
    })
  }, []);
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);


  return (
    <div className="app">
      <CookieConsent
        buttonText="Ok, j'accepte"
        style={{ background: "rgba(0,0,0,0.7)" }}
        buttonStyle={{ background: "none", border: "solid 1px #FC5455", color: "#FC5455", fontSize: "13px" }}
        expires={150}
      >
        En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies.
      </CookieConsent>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/a-propos" exact>
          <About />
        </Route>
        <Route path="*" status={404}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
