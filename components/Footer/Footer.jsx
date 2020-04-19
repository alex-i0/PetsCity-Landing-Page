import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <span className={styles.contact}>
      <a href="mailto:hello@pets.city" className={styles.email}>
        hello@pets.city
      </a>
      <a href="tel:5551234567" className={styles.phone}>
        +44 7927 188531
      </a>
    </span>
    <span className={styles.text}>
      Copyright © 2019-2020 Pets.City. All rights reserved.
    </span>
    <span className={styles.text}>
      <a href="/data_policy" className={styles.highlight}>
        Data Policy
      </a>
    </span>
  </div>
);

export default Footer;
