// == Import
import Page from '../../components/Page';
import Card from './Card';
import './style.scss';

// == Component
const Portfolio = () => {
    
  
    return (
        <Page>
            <div className="portfolio">
                <h2 className="portfolio__title">Portfolio<span className="portfolio__point">.</span></h2>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Page>
      
    );
  };
  // == Export
  export default Portfolio;