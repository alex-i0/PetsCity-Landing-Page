import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/index.module.scss';

const Home = () => (
  <div>
    <Head>
      <title>PetsCity</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <div className={styles.jumbotron}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Pick Your <span className={styles.highlight}>Pet</span>! <br />
          Trust us.
        </h1>
        <p className={styles.description}>
          Pets City can provide prompt and flexible solutions
          <br />
          for a full range professional and business needs
        </p>

        <div className={styles.buttonGroup}>
          <button>Start free trial</button>
          <button>Explore the platform</button>
        </div>

        <div className={styles.socialLinkGroup}></div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/assets/office.jpg"
          alt="Office with parrot"
        />
      </div>
    </div>
  </div>
);

export default Home;
