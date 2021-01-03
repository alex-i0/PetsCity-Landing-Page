import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const About = () => (
    <View>
        <div className="about-container">
            <div className="text-content">
                <Typography type={'display-bold'} size={'medium'}>
                    PetsCity Is About Connecting
                </Typography>
                <Typography type={'text'} size={'small'}>
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
            <div className="image-container">
                <Image src="/assets/about-person.svg" width={700} height={700} />
            </div>
        </div>
    </View>
);

export default About;
