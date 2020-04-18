import React from 'react';
import styles from './Form.module.scss';
import Checkbox from '../Checkbox/Checkbox';

const Form = () => (
  <form className={styles.form}>
    <input
      type="text"
      className={styles.nameInput}
      placeholder="Name"
      required
    />
    <input
      type="email"
      className={styles.emailInput}
      placeholder="Email address"
      required
    />
    <div className={styles.checkbox}>
      <Checkbox />
      <label className={styles.checkboxText}>
        By clicking Sign Up, you agree to our Terms. Learn how we collect and
        use data in
        <a className={styles.highlight} href="/data_policy">
          {' Data Policy'}
        </a>
      </label>
    </div>
    <button className={styles.submit}>Join us</button>
  </form>
);

export default Form;
