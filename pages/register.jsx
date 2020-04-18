import React from 'react';
import styles from '../scss/pages/register.module.scss';
import Form from '../components/Form/Form';

const register = () => (
  <div className={styles.register} id="register">
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Join Now and Stand Still</h2>
        <p className={styles.description}>
          We are still working on the platform. We will keep you informed about
          all future plans and changes.
        </p>
      </div>
      <Form />
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image} src="/assets/dog.png" alt="" />
    </div>
  </div>
);

export default register;
