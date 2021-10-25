import { Route } from 'react-router-dom';

import Menu from '../../components/Menu';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';

import './App.css';
import './style.scss';

function App() {
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
        <div>A propo</div>
      </Route>
      <Route path="/contact" exact>
        <div>Contact</div>
      </Route>
    </div>
  );
}

export default App;
