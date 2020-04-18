import React from 'react';
import StepBlock from '../components/StepBlock/StepBlock';
import styles from '../scss/pages/vision.module.scss';
import { stepsData } from '../data/stepsData';

const vision = () => {
  return (
    <div className={styles.vision}>
      <div className={styles.header}>
        <h2 className={styles.title}>How it works?</h2>
        <p className={styles.description}>
          We're procceding your application, and will notify once we're done.
        </p>
      </div>
      <div className={styles.steps}>
        {stepsData.map(({ title, text, image }, index) => (
          <StepBlock
            title={title}
            text={text}
            image={image}
            number={index + 1}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default vision;
