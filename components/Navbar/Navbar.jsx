import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

const links = [
    {
        name: 'Services',
        link: '/#services'
    },
    {
        name: 'Vision',
        link: '/#aboutus'
    },
    {
        name: 'Contact',
        link: '/#contact'
    }
];

const Navbar = ({ text, buttonLink }) => (
    <nav className="nav">
        <Link href="/">
            <h3 className="logo">
                <Image className="logoImg" src="/assets/pets-city-logo.png" height={62} width={62} loading="eager" />
                <Typography type={'--display-bold __small logo'}>PetsCity</Typography>
            </h3>
        </Link>
        <div className="menu">
            {links.map(({ name, link }, index) => (
                <Link href={link} key={index}>
                    <a className="menu-item">
                        <Typography type={'--link __small'} style={{ color: '#6e7191' }}>
                            {name}
                        </Typography>
                    </a>
                </Link>
            ))}
            <Link href={buttonLink || '/breeders'}>
                <a>
                    <Button text={text || 'Breeders'} size={'--small'} type={'--subtle'} />
                </a>
            </Link>
        </div>
    </nav>
);

export default Navbar;
