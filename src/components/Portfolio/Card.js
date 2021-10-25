// == Import
import { Link } from 'react-router-dom';

// == Component
const Card = () => {
  
    return (
        <article className="card">
            <img className="card__img" src="https://github.com/felipe-brando/hero-finder/blob/main/gif.gif?raw=true" alt="" />
            <div className="card__content">
                <h2 className="card__title">Work 1</h2>
                <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus diam, viverra vel interdum eu, ultrices et felis. Etiam porta vel nulla malesuada venenatis. Curabitur ut orci vitae neque venenatis porttitor. </p>
                <div className="card__links>"> 
                    <Link to="#" className="card__github-link">Repo</Link>
                    <Link to="#" className="card__demo-link">Demo</Link>
                </div>

            </div>
          

           
        </article>
      
    );
  };
  // == Export
  export default Card;