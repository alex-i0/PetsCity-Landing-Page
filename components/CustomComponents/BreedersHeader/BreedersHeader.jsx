import Link from 'next/link';
import Image from 'next/image';
import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import BusinessCard from '../BusinessCard/BusinessCard';

const BreedersHeader = () => (
    <View>
        <header className="breeders-header">
            <BusinessCard title="💼 Business Transparency" />
            <div className="text-container">
                <Typography type="display-bold" size="medium">
                    The future of global breeding is in your hands.
                </Typography>
                <Typography type="text" size="small">
                    PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders across
                    the Europe.
                </Typography>
            </div>
        </header>
    </View>
);

export default BreedersHeader;
