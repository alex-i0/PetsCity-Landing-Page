import React, { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Checkbox from '../components/Checkbox/Checkbox';
import styles from '../scss/pages/contact.module.scss';

const Contact = () => {
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.header}>
        <h2 className={styles.title}>Sign Up and Stand Still</h2>
        <p className={styles.description}>
          We are still working on the platform. We will keep you informed about
          all future plans and changes.
        </p>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={subscribe}>
            <label className={styles.label}>
              xxxx
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Email address"
                ref={inputEl}
                required
              />
            </label>
            <div className={styles.checkbox}>
              <Checkbox />
              <label className={styles.checkboxText}>
                By clicking Sign Up, you agree to our Terms. Learn how we
                collect and use data in{' '}
                <a className={styles.highlight} href="/data_policy">
                  Data Policy
                </a>
              </label>
            </div>

            <input className={styles.submit} type="submit" value="Sign Up" />
            {message ? console.log(message) : null}
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
};

export default Contact;
