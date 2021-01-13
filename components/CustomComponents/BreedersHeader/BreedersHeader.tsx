import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import BusinessCard from '../BusinessCard/BusinessCard';

type BreedersHeaderPropTypes = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const BreedersHeader: React.FC<BreedersHeaderPropTypes> = ({ onClick }: BreedersHeaderPropTypes) => (
    <View>
        <header className="breeders-header">
            <BusinessCard />
            <div className="text-container">
                <Typography type="display-bold" size="medium">
                    The future of global breeding is in your hands 🙌
                </Typography>
                <br />
                <br />
                <Typography type="text" size="small">
                    PetsCity is an online platform and a wonderful community of people looking for dream pets and reliable breeders across
                    Europe.
                    <br />
                    <br />
                    Our app is still in the development stage, but we encourage you to join us right now. Currently, we have{' '}
                    <span className="highlighted-number">234</span> signed breeders, and the number still increases.
                    <br />
                    <br />
                    Expose yourself to new horizons.
                </Typography>
                <Button className="breeders-button" onClick={onClick}>
                    Let&apos;s Work Together
                </Button>
            </div>
        </header>
    </View>
);

export default BreedersHeader;
