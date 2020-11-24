import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Vision from './vision';
import Register from './register';
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
                    <Typography type={'--display-bold __medium'}>Join the Breeders of the Future</Typography>
                    <p className="description">
                        PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders
                        across the Europe.
                    </p>
                    <a href="/breeders#register">
                        <Button text={'Join Today'} />
                    </a>
                </div>
            </div>
        </div>
        <Vision />
        <Register />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default breeders;
