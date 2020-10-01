import React from 'react';
import styles from '../scss/pages/register.module.scss';
import Form from '../components/Form/Form';

const register = () => (
  <div className={styles.register} id="register">
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contact with our team</h2>
        <p className={styles.description}>
          We are still working on the platform. Let us know that you are intrested and our professionals will contact you within 48 hours.
        </p>
      </div>
      <Form />
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image} src="/assets/contact-with-professional.svg" alt="Contact with our professional team" />
    </div>
  </div>
);

export default register;
