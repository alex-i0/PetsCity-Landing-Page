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
                        {name}
                    </a>
                );
            })}
            <span className="vr" />
            <a href={link || '/breeders'}>
                <button className="menuItemHighlight">{text || 'Breeders'}</button>
            </a>
        </div>
    </nav>
);

export default Navbar;
