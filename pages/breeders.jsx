import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Vision from './vision';
import Register from './register';
import dynamic from 'next/dynamic';
import styles from '../scss/pages/breeders.module.scss';

const DynamicMessenger = dynamic(
  () => import('../components/Messenger/Messenger'),
  { ssr: false }
);

const breeders = () => {
  return (
    <div>
      <Head>
        <title>PetsCity | Breeders</title>
      </Head>
      <Navbar text={'For PLovers'} link={'/'} />
      <div className={styles.breedersBackground}>
        <img
          src="/assets/background.png"
          alt="City with people and animals"
          className={styles.image}
        />
        <div className={styles.breeders}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Join the Breeders of the Future
              <br /> <span className={styles.highlight}>Start Today!</span>
            </h1>
            <p className={styles.description}>
              PetsCity is an online platform and a wonderful community of people
              looking for a dream pet and reliable breeders from all of Europe.
            </p>
            <a href="/breeders#register">
              <button className={styles.buttonHighlight}>Join Now</button>
            </a>
          </div>
        </div>
      </div>
      <Vision />
      <Register />
      <Footer />
      <DynamicMessenger />
    </div>
  );
};

export default breeders;
