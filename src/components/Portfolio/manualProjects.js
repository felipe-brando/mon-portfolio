import aupaImage from '../../assets/portfolio/aupa-immo.jpg';
import leParadisImage from '../../assets/portfolio/le-paradis.jpg';

const manualProjects = [
  {
    id: 'aupa-immo',
    name: 'Aupa Immobilier',
    description: "Site vitrine et plateforme immobilière pour une agence de la côte landaise, avec recherche de biens à l'achat, en location à l'année et en saisonnier. J'ai participé au développement du site ainsi qu'à la connexion des API de gestion des biens (vente et location), et à la rédaction du cahier des charges pour leur mise en place.",
    homepage: 'https://www.aupa-immo.com/',
    image: aupaImage,
    topics: ['api-rest', 'wordpress', 'gestion de projet'],
  },
  {
    id: 'le-paradis',
    name: 'Le Paradis',
    description: "Site vitrine pour un camping d'hôtes en Dordogne. J'ai participé à la connexion des API SOAP pour la remontée en temps réel des tarifs et des disponibilités des hébergements.",
    homepage: 'https://le-paradis.fr/',
    image: leParadisImage,
    topics: ['api soap', 'wordpress'],
  },
];

export default manualProjects;
