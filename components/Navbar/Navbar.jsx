import styles from './Navbar.module.scss';

const links = [
  {
    name: 'Services',
    link: '/#services',
  },
  {
    name: 'Vision',
    link: '/#aboutus',
  },
  {
    name: 'Contact',
    link: '/#contact',
  },
];

const Navbar = ({ text, link }) => (
  <nav className={styles.nav}>
    <a className={styles.logo} href="/">
      PetsCity
    </a>
    <div className={styles.menu}>
      {links.map(({ name, link }, index) => {
        return (
          <a className={styles.menuItem} href={link} key={index}>
            {name}
          </a>
        );
      })}
      <span className={styles.vr} />
      <a href={link || '/breeders'}>
        <button className={styles.menuItemHighlight}>
          {text || 'For Breeders'}
        </button>
      </a>
    </div>
  </nav>
);

export default Navbar;
