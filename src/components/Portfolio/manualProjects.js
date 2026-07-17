import aupaImage from '../../assets/portfolio/aupa-immo.jpg';
import leParadisImage from '../../assets/portfolio/le-paradis.jpg';
import laCampiereImage from '../../assets/portfolio/la-campiere.jpg';
import roqueStChristopheImage from '../../assets/portfolio/roque-st-christophe.jpg';

const manualProjects = [
  {
    id: 'la-campiere',
    name: 'La Campière',
    description: "Site internet pour un camping 4 étoiles sur l'Île d'Oléron. Je suis intervenu sur toutes les étapes du projet : développement, intégration, migration, et gestion de projet avec validation de chaque étape et contact client.",
    homepage: 'https://www.la-campiere.com/',
    image: laCampiereImage,
    topics: ['wordpress', 'gestion de projet'],
  },
  {
    id: 'aupa-immo',
    name: 'Aupa Immobilier',
    description: "Site internet et plateforme immobilière pour une agence de la côte landaise, avec recherche de biens à l'achat, en location à l'année et en saisonnier. J'ai participé au développement du site ainsi qu'à la connexion des API de gestion des biens (vente et location), et à la rédaction du cahier des charges pour leur mise en place.",
    homepage: 'https://www.aupa-immo.com/',
    image: aupaImage,
    topics: ['api-rest', 'wordpress', 'gestion de projet'],
  },
  {
    id: 'roque-st-christophe',
    name: 'La Roque Saint-Christophe',
    description: "Développement web du site internet pour un site touristique troglodytique en Dordogne, la Roque Saint-Christophe.",
    homepage: 'https://www.roque-st-christophe.com/',
    image: roqueStChristopheImage,
    topics: ['wordpress'],
  },
  {
    id: 'le-paradis',
    name: 'Le Paradis',
    description: "Site internet pour un camping en Dordogne. J'ai participé à la connexion des API SOAP pour la remontée en temps réel des tarifs et des disponibilités des hébergements.",
    homepage: 'https://le-paradis.fr/',
    image: leParadisImage,
    topics: ['api soap', 'wordpress'],
  },
];

export default manualProjects;
