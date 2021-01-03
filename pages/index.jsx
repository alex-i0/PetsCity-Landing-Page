import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
import Header from '../components/CustomComponents/Header/Header';
import Waitlist from '../components/CustomComponents/Waitlist/Waitlist';
import Transport from '../components/CustomComponents/Transport/Transport';
import Description from '../components/CustomComponents/Description/Description';
import About from '../components/CustomComponents/About/About';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const Home = () => (
    <div>
        <NextHead title="PetsCity" />
        <Navbar buttonText="Breeders" buttonLink="/breeders" />
        <Header />
        <About />
        <Description />
        <Transport />
        <Waitlist />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default Home;
