// == Import
import { GitHub } from 'react-feather';
import { ExternalLink } from 'react-feather';
import { Link } from 'react-router-dom';


// == Component
const Card = ({ name, description, html_url, homepage, default_branch, topics }) => {

    return (
        <article className="card">
            <img className="card__img" src={`https://raw.githubusercontent.com/felipe-brando/${name}/${default_branch}/${name}.jpg`} alt="" />    
            <div className="card__content">
              <h2 className="card__title">{name}</h2>
                <div className="card__topicsList">
                    {topics.map((topic) => (
                        <div className={
                            topic === 'axios' ? "card__topics axios"
                            :
                            topic === 'quill-editor' ? "card__topics quill"
                            :
                            topic === 'vanilla-javascript' ? "card__topics javascript"
                            :
                            topic === 'api-rest' ? "card__topics api"
                            :
                            topic === 'react' ? "card__topics react"
                            :
                            topic === 'react-router' ? "card__topics react-router"
                            :
                            topic === 'redux' ? "card__topics redux"
                            :
                            topic === 'semantic-ui' ? "card__topics semantic"
                            :
                            topic === 'socket.io' ? "card__topics socket"
                            :
                            topic === 'woocommerce' ? "card__topics woocommerce"
                            :
                            topic === 'wordpress' ? "card__topics wordpress"
                            :
                            "card__topics semantic"
                        } >
                          {topic}
                        </div>
                    ))}
                </div>
                <p className="card__text">{description}</p>
                <div className="card__links"> 
                  <a href={html_url} rel="noreferrer" target="_blank" className="card__github-link">
                    <GitHub/><span className="card__linkName">Repo</span>
                  </a>
                  <a href={homepage} rel="noreferrer" target="_blank" className={homepage !== "" ? "card__demo-link" : "card__demo-link hidden"} >
                    <ExternalLink/><span className="card__linkName">Demo</span>
                  </a>
                </div>
            </div>
          
        </article>
      
    );
  };
  // == Export
  export default Card;