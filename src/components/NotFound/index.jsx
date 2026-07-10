import Page from '../../components/Page';
import AvatarNotFound from '../../components/AvatarNotFound';
import { Link } from 'react-router-dom';
import './style.scss';

const NotFound = () => {
    return (
        <Page>
            <div className="notFound">
                <AvatarNotFound />
                <section className="notFound__content">
                    <p className="notFound__hello">Oups!</p>
                    <p className="notFound__presentation">La page que vous recherchez n'existe pas.</p>
                    <Link to="/" className="notFound__link">Retour à l'Accueil</Link> 
                </section>
            </div>
        </Page>
    );
};

export default NotFound;
