import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import { dataPolicy } from '../data/dataPolicy';
import styles from '../scss/pages/data_policy.module.scss';

const data_policy = () => (
  <div>
    <Head>
      <title>PetsCity | Data Policy</title>
    </Head>
    <Navbar />
    <div className={styles.dataPolicy}>
      <section className={styles.section}>
        {dataPolicy.map(({ title, text }, index) => (
          <details className={styles.details} key={index}>
            <summary className={styles.summary}>{title}</summary>
            <div className={styles.div}>
              <p className={styles.p}>{text}</p>
            </div>
          </details>
        ))}
      </section>
    </div>
  </div>
);

export default data_policy;
