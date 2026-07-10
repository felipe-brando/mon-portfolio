// == Import
import { useSelector } from "react-redux";
import Page from '../../components/Page';
import Loading from './Loading'
import Card from './Card';
import './style.scss';

// == Component
const Portfolio = () => {
   
  const repos = useSelector((state) => state.repos.repos);
  const loading = useSelector((state) => state.repos.loading);
  
  if (loading) {
    return <Loading />;
  }
    return (
        <Page>
          <div className="portfolio">
            <h2 className="portfolio__title">Portfolio<span className="portfolio__point">.</span></h2>
            <p className="portfolio__subtitle">Sélection de mes travaux</p>
            {
              // eslint-disable-next-line array-callback-return
              repos.map((repo) => {
                  if(repo.name !== 'felipe-brando'){
                    return (
                      <Card key={repo.id} {...repo} />
                    );
                  }
              })
            }         
          </div>
        </Page>
      
    );
};

// == Export
export default Portfolio;