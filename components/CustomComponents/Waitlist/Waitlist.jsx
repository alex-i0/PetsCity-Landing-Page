import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const Waitlist = () => (
    <View padding={false}>
        <div className="waitlist-container">
            <Typography type={'--display __small'} className="heading">
                <span className="highlight">PetsCity</span> is coming to Europe 🇪🇺
            </Typography>
            <Typography type={'--text __small'}>
                Introducing PetsCity - your account for global fee-free spending, free international money transfers and instant payment
                notifications.
            </Typography>
            <Button size={'--medium'} className={'waitlist-button'}>
                Join Waitlist
            </Button>
        </div>
        <div className="waitlist-image-container">
            <Image src="/assets/waitlist-icon.svg" width={600} height={600} className="waitlist-image" loading="eager" />
        </div>
    </View>
);

export default Waitlist;
