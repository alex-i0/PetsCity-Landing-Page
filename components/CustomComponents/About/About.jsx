import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';

const About = () => (
    <View>
        <div className="about-container">
            <div className="text-content">
                <Typography type={'display-bold'} size={'medium'}>
                    We Are Here To Connect 🐾
                </Typography>
                <Typography type={'text'} size={'small'}>
                    <br />
                    <br />
                    At PetsCity, we recognize how hard is to find your dream pet. Therefore we want to give you a complete and transparent
                    solution.
                    <br />
                    <br />
                    We gathered many professional breeders with years of experience. With us, you can be sure that your dog or cat comes
                    from a<span style={{ fontWeight: 'bold' }}> good home</span>🏠.
                    <br />
                    <br />
                    We believe in love at first sight. However, sometimes it's not that easy. That's why we offer you the possibility to
                    consider over 2300 pets.
                </Typography>
            </div>
            <div className="image-container">
                <Image src="/assets/about-person.svg" width={700} height={700} loading="eager" />
            </div>
        </div>
    </View>
);

export default About;
