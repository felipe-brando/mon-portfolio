// == Import
import Page from '../../components/Page';

import montreal from '../../assets/montreal.jpg';
import condor from '../../assets/condor.jpg';
import lama from '../../assets/lama.JPG';
import './style.scss';

// == Component
const About = () => {
   
    return (
        <Page>
          <div className="about">
            <h2 className="about__title">A propos<span className="about__point">.</span></h2>
                <p className="about__subtitle">Quelques infos</p>
            <div className="about__content-intro">
                <p className="about__text">
                  Je suis <em>chef de projet web</em> et <em>développeur full stack</em>, avec une solide expérience en gestion de projet digital et en développement web, en agence web.
                </p>
                <p className="about__text">
                  Mes différentes expériences professionnelles en gestion de projets digitaux m'ont fait découvrir ma passion pour la programmation web. Souhaitant acquérir des nouvelles compétences techniques, j'ai effectué une formation en développement web full stack avec une spécialisation en <em>React Js</em>. J'ai également acquis une solide expérience professionnelle en <em>WordPress</em>.
                </p>
                <p className="about__text">
                  Grâce à une large palette d’expériences en design, en graphisme, en gestion de projet et en développement web, j’ai pu me construire un profil à la fois créatif et technique, ce qui me permet d’enrichir chacun de mes projets que ce soit dans le digital ou dans la création.
                </p> 
            </div>
            <div className="about__content-text">
              <p className="about__text">
                Toujours en quête de nouveaux challenges depuis très jeune et toujours désireux de sortir de ma zone de confort, j’ai d’abord quitté mon pays d’origine, la Colombie pour découvrir des nouveaux horizons, une nouvelle culture et une nouvelle langue.
              </p>
              <p className="about__text">
                Plus tard en France, attiré par les métiers artistiques et de la création, je suis devenu Designer, métier qui m’a appris une méthodologie de travail pour bien exploiter ma créativité. Lors de mes premières expériences professionnelles dans ce métier, j’ai commencé à m’intéresser par le monde passionnant du digital et de son potentiel pour la croissance des entreprises. C’est ainsi que j’ai décidé de me tourner vers le digital et je suis devenu chef de projet web marketing.
              </p>
              <p className="about__text">
                Pendant mes études et mes expériences en gestion de projets digitaux, j’ai commencé à écrire mes premières lignes de code.
              </p>
              <p className="about__text">
                  Avec l'envie d'acquérir des nouvelles compétences techniques, j'ai effectué une formation en développement web full stack et je me suis spécialisé en React Js.
              </p>
              <p className="about__text">
                  Aujourd'hui, je mets à profit cette double expertise en occupant un poste hybride de développeur web et chef de projet digital en agence web, où je peux allier code et gestion de projet au quotidien.
              </p>
              <h3 className="about__title2">Dessin, Illustration & Voyages<span className="about__point">.</span></h3>
              <p>Quand je ne code pas, je voyage avec mon carnet de croquis.</p>
              <div className="about__blocImages"> 
                <img  className="about__image"src={montreal} alt="Affiche Montréal"></img>
                <img  className="about__image"src={condor} alt="Illustration d'un Condor"></img>
                <img className="about__image" src={lama} alt="Dessin d'un Lama"></img>
              </div>
              <div className="about__blocLink"> 
                <a className="about__link" href="https://www.instagram.com/paips.creations/" rel="noreferrer" target="_blank">
                  <button type="button" className="about__btn" >Voir plus sur Instagram</button>
                </a>
              </div>
            </div>
          </div>
        </Page>
      
    );
  };
  // == Export
  export default About;