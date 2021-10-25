// == Import
import { Link } from 'react-router-dom';

// == Component
const Card = ({ name, description, html_url, homepage, default_branch }) => {

 
    const img = '.jpg';
    const p = '.gif';

    console.log(img);
  
    return (
        <article className="card">
            <img className="card__img" src={`https://raw.githubusercontent.com/felipe-brando/${name}/${default_branch}/${name}.gif`} alt="" />
            <div className="card__content">
                <h2 className="card__title">{name}</h2>
                <p className="card__text">{description}</p>
                <div className="card__links>"> 
                    <a href={html_url} rel="noreferrer" target="_blank" className="card__github-link">Repo</a>
                    <a href={homepage} rel="noreferrer" target="_blank" className={homepage !== "" ? "card__demo-link" : "card__demo-link hidden"} >Demo</a> 

                </div>

            </div>
          

           
        </article>
      
    );
  };
  // == Export
  export default Card;