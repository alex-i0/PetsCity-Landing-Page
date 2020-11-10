import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import SocialMediaTile from '../components/SocialMediaTile/SocialMediaTile';
import TextSwitch from '../components/TextSwitch/TextSwitch';
import Overview from './overview';
import Contact from './contact';
import Footer from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
import { socialMediaData } from '../data/socialMedia';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const Home = () => (
    <div>
        <NextHead title="PetsCity" />
        <Navbar />
        <div className="jumbotron">
            <div className="header">
                <h1 className="title">
                    <TextSwitch /> <br />
                </h1>
                <h2 className="subtitle">We'll handle the rest.</h2>
                <p className="description">
                    Pets City can provide prompt and flexible solutions for a full range professional and business needs
                </p>

                <div className="buttonGroup">
                    <a href="#contact">
                        <button className="action-button">Join Now</button>
                    </a>
                </div>

                <div className="socialLinkGroup">
                    {socialMediaData.map(({ name, link, icon }, index) => {
                        return <SocialMediaTile value={name} link={link} icon={icon} key={index} />;
                    })}
                </div>
            </div>
            <div className="imageContainer">
                <img className="image" src="/assets/animal-shelter.png" alt="Office with parrot" />
            </div>
        </div>
        <Overview />
        <Contact />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default Home;
