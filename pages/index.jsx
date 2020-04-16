import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SocialMediaTile from '../components/SocialMediaTile/SocialMediaTile';
import TextSwitch from '../components/TextSwitch/TextSwitch';
import styles from '../scss/pages/index.module.scss';
import { socialMediaData } from '../data/socialMedia';

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
          <TextSwitch /> <br />
        </h1>
        <h2 className={styles.subtitle}>We'll handle the rest.</h2>
        <p className={styles.description}>
          Pets City can provide prompt and flexible solutions
          <br />
          for a full range professional and business needs
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.buttonOutlineHighlight}>
            Explore the platform
          </button>
          <button className={styles.buttonHighlight}>Sign up for free</button>
        </div>

        <div className={styles.socialLinkGroup}>
          {socialMediaData.map(({ name, link, icon }, index) => {
            return (
              <SocialMediaTile
                value={name}
                link={link}
                icon={icon}
                key={index}
              />
            );
          })}
        </div>
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
