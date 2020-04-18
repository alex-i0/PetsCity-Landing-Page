import React from 'react';
import styles from './StepBlock.module.scss';

const StepBlock = ({ title, number, image, text }) => (
  <div
    className={`${styles.stepBlock} ${
      number % 2 === 0 ? styles.stepBlockReverse : null
    }`}
  >
    <div className={styles.contentContainer}>
      <h1 className={styles.title}>
        <span className={styles.numberHighlight}>{`#${number}`}</span>
        {title}
      </h1>
      <p className={styles.text}>{text}</p>
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={image} alt="" />
    </div>
  </div>
);

export default StepBlock;
