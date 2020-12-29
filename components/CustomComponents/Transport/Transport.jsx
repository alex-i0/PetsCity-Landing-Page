import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const Transport = () => {
    return (
        <View>
            <div className="transport-container">
                <div className="image-container">
                    <Image src="/assets/world-map.svg" width={700} height={700} />
                </div>
                <div className="text-container">
                    <Typography type={'--display __small'}>Stay Local, Reach Global</Typography>
                    <br />
                    <Typography type={'--text __small'}>
                        With PetsCity, you can browse through over 200 hundred animals from all over Europe without moving from your sofa.
                        <br />
                        <br />
                        Thanks to our partnership with the certified transporting firms,{' '}
                        <a href="" className="partner">
                            QuickTrans{' '}
                        </a>
                        and{' '}
                        <a href="" className="partner">
                            PetsTravel
                        </a>
                        , we handle transport for you. Safe and stressful for your future pet!
                    </Typography>
                </div>
            </div>
        </View>
    );
};

export default Transport;
