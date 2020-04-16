import React from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import styles from '../scss/pages/contact.module.scss';

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.header}>
      <h2 className={styles.title}>Stand for Wildlife</h2>
      <p className={styles.description}>
        Join a community of over 200 breeders helping protect pets and wildelife
        we love. We count on you.
      </p>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder="Email address"
            required
          />
          <div className={styles.checkbox}>
            <Checkbox />
            <label className={styles.checkboxText}>
              By signing up you agree to data processing described in our
              privacy policy
            </label>
          </div>

          <input className={styles.submit} type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src="/assets/dog.png"
        alt="Office with parrot"
      />
    </div>
  </div>
);

export default Contact;
