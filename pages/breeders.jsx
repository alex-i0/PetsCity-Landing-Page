import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Transit from '../components/CustomComponents/Transit/Transit';
import Waitlist from '../components/CustomComponents/Waitlist/Waitlist';
import dynamic from 'next/dynamic';
import Button from '../components/Button/Button';
import Typography from '../components/Typography/Typography';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const breeders = () => (
    <div>
        <NextHead title="PetsCity | Breeders" />

        <Navbar text={'Get a pet'} link={'/'} />
        <div className="breedersBackground">
            <img src="/assets/background.png" alt="City with people and animals" className="image" />
            <div className="breeders">
                <div className="header">
                    <Typography type={'--display-bold __medium'}>The future of global breeding is in your hands. </Typography>
                    <p className="description">
                        PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders
                        across the Europe.
                    </p>
                    <a href="/breeders#register">
                        <Button>Join Today</Button>
                    </a>
                </div>
            </div>
        </div>
        <Transit />
        <Waitlist />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default breeders;
