import React from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import styles from '../scss/pages/contact.module.scss';

const Contact = () => (
  <div className={styles.contact} id="contact">
    <div className={styles.header}>
      <h2 className={styles.title}>Sign Up and Stand Still</h2>
      <p className={styles.description}>
        We are still working on the platform. We will keep you informed about
        all future plans and changes.
      </p>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label className={styles.label}>
            xxxx
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Email address"
              required
            />
          </label>
          <div className={styles.checkbox}>
            <Checkbox />
            <label className={styles.checkboxText}>
              By clicking Sign Up, you agree to our Terms. Learn how we collect
              and use data in{' '}
              <a className={styles.highlight} href="/data_policy">
                Data Policy
              </a>
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
