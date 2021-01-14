import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MessengerDynamicImport from '../components/Messenger/MessengerDynamicImport';
import Header from '../components/CustomComponents/Header/Header';
import Waitlist from '../components/CustomComponents/Waitlist/Waitlist';
import Transport from '../components/CustomComponents/Transport/Transport';
import Description from '../components/CustomComponents/Description/Description';
import About from '../components/CustomComponents/About/About';
import Counter from '../components/CustomComponents/Counter/Counter';

const Home: React.FC = () => (
    <div>
        <NextHead title="PetsCity" />
        <Navbar buttonText="Breeders" buttonLink="/breeders" />
        <Header />
        <Counter />
        <About />
        <Description />
        <Transport />
        <Waitlist />
        <Footer />
        <MessengerDynamicImport />
    </div>
);

export default Home;
