// == Import
import { useSelector } from "react-redux";
import Page from '../../components/Page';
import Card from './Card';
import './style.scss';

// == Component
const Portfolio = () => {
   
    const repos = useSelector((state) => state.repos.repos);
    console.log(repos);
    return (
        <Page>
          <div className="portfolio">
            <h2 className="portfolio__title">Portfolio<span className="portfolio__point">.</span></h2>
            <p className="portfolio__subtitle">Sélection de mes travaux</p>
            {repos.map((repo) => {
                if(repo.name !== 'felipe-brando'){
                  return (
                    <Card key={repo.id} {...repo} />
                  );
                }
            })}
          

  
                  
          </div>
        </Page>
      
    );
  };
  // == Export
  export default Portfolio;