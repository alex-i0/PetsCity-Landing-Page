import Image from 'next/image';
import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import SocialMediaLink from '../../SocialMediaLinks/SocialMediaLinks';
import TextSwitch from '../../TextSwitch/TextSwitch';
import { useRouter } from 'next/router';
import { scrollToNode } from '../../../utils/navigation';

const Header = () => {
    const router = useRouter();

    return (
        <View>
            <header className="index-header">
                <Typography type="display-bold" size="medium" className="title">
                    <TextSwitch />
                </Typography>
                <Typography type="display-bold" size="medium">
                    We'll handle the rest.
                </Typography>
                <br />
                <div className="subtext">
                    <Typography type="text" size="medium">
                        Pets City provides you with an access to hundereds of breeders. Secure, easy and and flexible solutions for finding
                        your future pet.
                    </Typography>
                </div>

                <div className="button-container">
                    <a
                        onClick={() => {
                            scrollToNode('waitlist', router);
                        }}
                    >
                        <Button>Join Waitlist</Button>
                    </a>
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
};

export default Header;
