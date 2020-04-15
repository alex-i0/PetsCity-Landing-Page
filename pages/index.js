import Head from 'next/head';
import styles from '../scss/pages/index.module.scss';

const Home = () => (
  <div>
    <Head>
      <title>Pets.city</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1>Welcome to Next.js!</h1>
    </main>
  </div>
);

export default Home;
