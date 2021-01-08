import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { string } from 'prop-types';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import { scrollToNode } from '../../utils/navigation';

const links = [
    {
        name: 'Services'
    },
    {
        name: 'Transport'
    },
    {
        name: 'Waitlist'
    }
];

const Navbar = ({ buttonText = 'Placeholder', buttonLink = '/' }) => {
    const router = useRouter();

    return (
        <nav className="nav">
            <Link href="/">
                <div className="logo">
                    <Image className="logoImg" src="/assets/pets-city-logo.png" height={62} width={62} loading="eager" />
                    <Typography type="display-bold" size="small" className="logo">
                        PetsCity
                    </Typography>
                </div>
            </Link>
            <div className="menu">
                {links.map(({ name }, index) => (
                    <a className="menu-item" onClick={() => scrollToNode(name.toLowerCase(), router)} key={index}>
                        <Typography type="link" size="small" style={{ color: '#6e7191' }}>
                            {name}
                        </Typography>
                    </a>
                ))}
                <Link href={buttonLink}>
                    <a>
                        <Button size="small" type="subtle">
                            {buttonText}
                        </Button>
                    </a>
                </Link>
            </div>
        </nav>
    );
};

Navbar.propsTypes = {
    text: string.isRequired,
    buttonText: string
};

export default Navbar;
