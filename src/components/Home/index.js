import Page from '../../components/Page'
import Avatar from '../../components/Avatar'
import './style.scss';

const Home = () => {
    return (
        <Page>
            <Avatar className="avatar" />
            <section className="intro">
            <h1>Title</h1>
            <p>Texte</p>
            </section>
        </Page>
    );
};

export default Home;
