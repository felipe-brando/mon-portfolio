import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Menu from '../../components/Menu';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';

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
      <Menu />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>
      <Route path="/a-propos" exact>
        <About />
      </Route>
    </div>
  );
}

export default App;
