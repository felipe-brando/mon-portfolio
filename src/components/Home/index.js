import Page from '../../components/Page'
import Avatar from '../../components/Avatar'
import './style.scss';

const Home = () => {
    return (
        <Page>
            <div className="intro">
                <Avatar />
                <section className="intro__content">
                    <p className="intro__hello">Bonjour ! 👋 </p>
                    <p className="intro__presentation">Je suis <span className="intro__name">Felipe Brando</span><span className="intro__point">.</span></p>
                    <h1 className="intro__text">Développeur web fullstack & Chef de projet digital <span>avec une touche de créativité, basé au Pays Basque.</span></h1>
                </section>
            </div>
        </Page>
    );
};

export default Home;
