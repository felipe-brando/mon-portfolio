import logo from '../../assets/logo.svg'; 
import './App.css';

function App() {
  return (
    <div className="app">
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
      <main classeName="page">
        <div className="avatar"></div>
        <section className="intro">
          <h1>Title</h1>
          <p>Texte</p>
        </section>
      </main>
    </div>
  );
}

export default App;
