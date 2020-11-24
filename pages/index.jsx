import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Overview from './overview';
import Contact from './contact';
import Footer from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
import Header from '../components/CustomComponents/Header';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const Home = () => (
    <div>
        <NextHead title="PetsCity" />
        <Navbar />
        <Header />
        <Overview />
        <Contact />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default Home;
