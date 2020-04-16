import React from 'react';
import styles from './TextSwitch.module.scss';

const TextSwitch = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__container}>
        <p className={styles.content__container__text}>Choose Your </p>

        <ul className={styles.content__container__list}>
          <li className={styles.content__container__list__item}>Pet !</li>
          <li className={styles.content__container__list__item}>Dog !</li>
          <li className={styles.content__container__list__item}>Cat !</li>
          <li className={styles.content__container__list__item}>Parrot !</li>
        </ul>
      </div>
    </div>
  );
};

export default TextSwitch;
