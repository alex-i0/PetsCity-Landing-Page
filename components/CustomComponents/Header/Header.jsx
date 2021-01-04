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
            <Typography type="display-bold" size="medium">
                We'll handle the rest.
            </Typography>
            <br />
            <div className="subtext">
                <Typography type="text" size="medium">
                    Pets City provides you with an access to hundereds of breeders. Secure, easy and and flexible solutions for finding your
                    future pet.
                </Typography>
            </div>

            <div className="button-container">
                <Link href="/">
                    <a>
                        <Button>Join Waitlist</Button>
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
