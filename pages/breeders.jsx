import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import View from '../components/View/View';
import dynamic from 'next/dynamic';
import Button from '../components/Button/Button';
import Image from 'next/image';
import Typography from '../components/Typography/Typography';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const breeders = () => (
    <div>
        <NextHead title="PetsCity | Breeders" />

        <Navbar buttonText="Get a Pet" />
        <View padding={false}>
            <div className="breeders-container">
                <div className="image-container"></div>
                <div className="text-container">
                    <Typography type="display-bold" size="medium">
                        The future of global breeding is in your hands.
                    </Typography>
                    <Typography>
                        PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders
                        across the Europe.
                    </Typography>
                </div>
            </div>
        </View>

        <DynamicMessenger />
    </div>
);

export default breeders;
