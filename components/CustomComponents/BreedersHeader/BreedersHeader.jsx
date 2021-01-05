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
                    The future of global breeding is in your hands 🙌
                </Typography>
                <br />
                <br />
                <Typography type="text" size="small">
                    PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders across
                    the Europe.
                    <br />
                    <br />
                    Despite our continous work on reavaling the app, we encourage you to join us right know. Currently we have 234 signed
                    breeders, and our offer still expands.
                    <br />
                    <br />
                    Expose yourself for a new horizons.
                </Typography>
            </div>
        </header>
    </View>
);

export default BreedersHeader;
