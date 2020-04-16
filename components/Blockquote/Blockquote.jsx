import React from 'react';
import styles from './Blockquote.module.scss';

const Blockquote = ({ text }) => {
  return <blockquote className={styles.blockquote}>{text}</blockquote>;
};

export default Blockquote;
