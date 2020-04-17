import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import styles from '../scss/pages/breeders.module.scss';

const breeders = () => {
  return (
    <div>
      <Head>
        <title>PetsCity | Data Policy</title>
      </Head>
      <Navbar text={'For Pet Lovers'} link={'/'} />
      <div className={styles.breedersBackground}>
        <img
          src="/assets/background.webp"
          alt="City with people and animals"
          className={styles.image}
        />
        <div className={styles.breeders}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Join the Breeders of the Future
              <br /> Start Today!
            </h1>
            <p className={styles.description}>
              PetsCity it’s an online platform and a wonderful community of
              people looking for a dream pet and reliable breeders from all of
              Europe.
            </p>
            <button className={styles.buttonHighlight}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default breeders;
