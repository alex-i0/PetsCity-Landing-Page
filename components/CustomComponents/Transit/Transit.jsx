import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const Transit = () => {
    return (
        <View>
            <div className="transit-container">
                <div className="image-container">
                    <Image src="/assets/world-map.svg" width={700} height={700} />
                </div>
                <div className="text-container">
                    <Typography type={'--display __small'}>Stay Local, Reach Global</Typography>
                    <br />
                    <Typography type={'--text __small'}>
                        Introducing PetsCity - your account for global fee-free spending, free international money transfers and instant
                        payment notifications.
                    </Typography>
                </div>
            </div>
        </View>
    );
};

export default Transit;
