import Link from 'next/link';
import Image from 'next/image';
import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import SocialMediaLink from '../../SocialMediaLinks/SocialMediaLinks';
import TextSwitch from '../../TextSwitch/TextSwitch';

const Header = () => (
    <View>
        <header className="index-header">
            <h1 className="title">
                <TextSwitch />
            </h1>
            <Typography type={'--display-bold __medium '}>We'll handle the rest.</Typography>
            <br />
            <div className="subtext">
                <Typography type={'--text __medium'}>
                    Pets City can provide prompt and flexible solutions for a full range professional and business needs.
                </Typography>
            </div>

            <div className="button-container">
                <Link href="/#contact">
                    <a>
                        <Button>Join Now</Button>
                    </a>
                </Link>
            </div>

            <div className="social-media-links">
                <SocialMediaLink />
            </div>
        </header>
        <div className="image-container">
            <Image src="/assets/animal-header.svg" width={900} height={900} className="header-image" loading="eager" />
        </div>
    </View>
);

export default Header;
