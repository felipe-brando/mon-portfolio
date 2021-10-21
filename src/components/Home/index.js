import Page from '../../components/Page'
import Avatar from '../../components/Avatar'
import './style.scss';

const Home = () => {
    return (
        <Page>
            <div className="intro">
                <Avatar />
                <section className="intro__content">
                    <p className="intro__hello">Bonjour ! Je suis</p>
                    <p className="intro__name">Felipe Brando</p>
                    <h1 className="intro__content">Développeur web fullstack & Chef de projet digital <spam>avec une touche de créativité</spam></h1>
                </section>
            </div>
        </Page>
    );
};

export default Home;
