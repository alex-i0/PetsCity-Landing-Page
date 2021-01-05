import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const About = () => (
    <View>
        <div className="about-container">
            <div className="text-content">
                <Typography type={'display-bold'} size={'medium'}>
                    We Are Here To Connect
                </Typography>
                <Typography type={'text'} size={'small'}>
                    At PetsCity, we recognize how hard is to find your dream pet. Therefore we want to give you a complete and transparent
                    solution.
                    <br />
                    <br />
                    Our app gives you an unlimited access to hundreds of certified breeders.
                </Typography>
            </div>
            <div className="image-container">
                <Image src="/assets/about-person.svg" width={700} height={700} loading="eager" />
            </div>
        </div>
    </View>
);

export default About;
