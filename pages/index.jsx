import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import SocialMediaTile from '../components/SocialMediaTile/SocialMediaTile';
import TextSwitch from '../components/TextSwitch/TextSwitch';
import Overview from './overview';
import Contact from './contact';
import Footer from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
import styles from '../scss/pages/index.module.scss';
import { socialMediaData } from '../data/socialMedia';

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('../components/Messenger/Messenger'),
//   { ssr: false }
// );
//Await for credentials

const Home = () => (
  <div>
    <Head>
      <title>PetsCity</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta
        name="description"
        content="Join to Pets City today! Get access to hundreds of certified breeders."
      />
      <meta
        name="keywords"
        content="Pets, City, Pets.city, animals transport, animals to buy"
      />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4052f2" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#d7e0fd" />
    </Head>

    <Navbar />
    <div className={styles.jumbotron}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <TextSwitch /> <br />
        </h1>
        <h2 className={styles.subtitle}>We'll handle the rest.</h2>
        <p className={styles.description}>
          Pets City can provide prompt and flexible solutions for a full range
          professional and business needs
        </p>

        <div className={styles.buttonGroup}>
          <a href="#services">
            <button className={styles.buttonHighlight}>Explore</button>
          </a>
          <a href="#contact">
            <button className={styles.buttonOutlineHighlight}>Join Now</button>
          </a>
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
    <Overview />
    <Contact />
    <Footer />
  </div>
);

export default Home;
