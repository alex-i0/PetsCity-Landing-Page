import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}> PetsCity</div>
    <div className={styles.menu}>
      <span className={styles.menuItem}>Services</span>
      <span className={styles.menuItem}>About us</span>
      <span className={styles.menuItem}>Contact</span>
    </div>
  </nav>
);

export default Navbar;
