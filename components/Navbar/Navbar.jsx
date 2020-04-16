import styles from './Navbar.module.scss';

const links = [
  {
    name: 'Services',
    link: '#services',
  },
  {
    name: 'About us',
    link: '#aboutus',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}> PetsCity</div>
    <div className={styles.menu}>
      {links.map(({ name, link }, index) => {
        return <a className={styles.menuItem}>{name}</a>;
      })}
      <span className={styles.vr} />
      <a className={styles.menuItemHighlight}>For Breeders</a>
    </div>
  </nav>
);

export default Navbar;
