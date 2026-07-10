// == Import
import Page from '../../components/Page';

import './style.scss';

// == Component
const LegalNotice = () => {
   
    return (
        <Page>
          <div className="legalNotice">
            <h2 className="legalNotice__title">Mentions Légales<span className="legalNotice__point">.</span></h2>
            <p className="legalNotice__subtitle">Infos à savoir</p>
            <div className="legalNotice__content-text">
              <h3>1.	Publication</h3>
              <p className="legalNotice__text"><span class="entitled">Propriétaire du site :</span> Felipe Brando – f.brandotalero@gmail.com</p>
              <p className="legalNotice__text"><span class="entitled">Directeur de la publication:</span> Felipe Brando – f.brandotalero@gmail.com</p>
              <p className="legalNotice__text"><span class="entitled">Hébergeur:</span><br/>OVH<br/>2 rue Kellermann, 59100 Roubaix<br/>Tel : 08.99.49.87.65</p>
              <p className="legalNotice__text">Ce site web, <a href="https://felipebrando.fr/">https://felipebrando.fr/</a>, a été conçu par Felipe Brando.</p>
                    
              <h3>2.	Conditions générales d’utilisation du site</h3>
              <p className="legalNotice__text">L’utilisation du site <a href="https://felipebrando.fr/">https://felipebrando.fr/</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>
              
              <h3>3.	Respect de la vie privée et des données personnelles</h3>
              <p className="legalNotice__text">Les données recueillies sur ce site sont destinées à des fins de communications et de contacts. Elles ne seront en aucun cas mises à disposition ou vendues à des tierces parties. Aucun traitement de données personnelles n'est effectué.</p>
              <p className="legalNotice__text">Conformément à la loi n°78-17 dite «Informatique et Libertés» du 6 janvier 1978, vous disposez d’un droit d’accès, de rectification, de suppression des données vous concernant. Ce droit peut s’exercer en ligne en adressant un email au propriétaire du site.</p>
              
              <h3>4.	Propriété intellectuelle</h3>
              <p className="legalNotice__text">Felipe Brando est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur l’ensemble des autres éléments accessibles sur le site, notamment les textes, images, graphismes et logo.</p>
              <p className="legalNotice__text">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de leur propriétaire.</p>
              <p className="legalNotice__text">Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
              
              <h3>5.	Limitation de responsabilité</h3>
              <p className="legalNotice__text">Toutes les informations de ce site sont fournies à titre purement indicatif et présentent un risque d'erreur, d'inexactitude ou d'omission. En conséquence, l’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
              <p className="legalNotice__text">Les sites reliés directement ou indirectement au présent site ne sont pas sous son contrôle. En conséquence, l’auteur du site n'assume aucune responsabilité quant aux informations publiées sur ces sites. Les liens avec des sites extérieurs ne sont fournis qu'à titre de commodité et n'impliquent aucune caution quant à leur contenu.</p>
              <p className="legalNotice__text">Le site <a href="https://felipebrando.fr/">https://felipebrando.fr/</a> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur lors de l’utilisation du site, et résultant de l’apparition d’un bug ou d’une incompatibilité. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</p>
              
              <h3>6.	 Droit applicable et attribution de juridiction</h3>
              <p className="legalNotice__text">Tout litige en relation avec l’utilisation du site <a href="https://felipebrando.fr/">https://felipebrando.fr/</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
				   </div>
          </div>
        </Page>
    );
  };
  // == Export
  export default LegalNotice;