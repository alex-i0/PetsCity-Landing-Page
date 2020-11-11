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

const Navbar = ({ text, link }) => (
    <nav className="nav">
        <a href="/">
            <h3 className="logo">
                <img className="logoImg" src="/assets/pets-city-logo.png" />
                PetsCity
            </h3>
        </a>
        <div className="menu">
            {links.map(({ name, link }, index) => {
                return (
                    <a className="menuItem" href={link} key={index}>
                        <Typography text={name} type={'--link __small'} />
                    </a>
                );
            })}
            <span className="vr" />
            <a href={link || '/breeders'}>
                <Button text={text || 'Breeders'} size={'--small'} />
            </a>
        </div>
    </nav>
);

export default Navbar;
