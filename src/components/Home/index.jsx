import Page from '../../components/Page'
import Avatar from '../../components/Avatar'
import Cv from '../../assets/CV-Felipe-Brando-2026.pdf'

import { Linkedin, GitHub, Mail } from 'react-feather';


import './style.scss';

const Home = () => {
    return (
        <Page>
            <div className="intro">
                <Avatar />
                <section className="intro__content">
                    <p className="intro__hello">Bonjour ! 👋 </p>
                    <p className="intro__presentation">Je suis<br/> <span className="intro__name">Felipe Brando</span><span className="intro__point">.</span></p>
                    <h1 className="intro__text"><em>Chef de projet digital &<br/> Développeur web fullstack</em> avec une touche de créativité,<br/> basé au Pays Basque.</h1>
                    <div className="intro__btnsContainer">
                        <a className="intro__btnLink" href={Cv} rel="noreferrer" target="_blank"><button className="intro__cv" type="button">Mon CV</button></a>
                        <ul className="intro__socialList">
                            <li className="intro__socialItem">
                                <a className="intro__socialItem-Link" href="https://www.linkedin.com/in/felipe-brando-talero/" rel="noreferrer" target="_blank"><Linkedin /></a>
                            </li>
                            <li className="intro__socialItem">
                                <a className="intro__socialItem-Link" href="https://github.com/felipe-brando" rel="noreferrer" target="_blank"><GitHub /></a>
                            </li>
                            <li className="intro__socialItem">
                                <a className="intro__socialItem-Link" href="mailto:f.brandotalero@gmail.com" rel="noreferrer" target="_blank"><Mail/></a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Page>
    );
};

export default Home;
