import React from 'react';
import styles from './Blockquote.module.scss';

const Blockquote = () => {
  return (
    <blockquote className={styles.blockquote}>
      The public is more familiar with bad design than good design. It is, in
      effect, conditioned to prefer bad design, because that is what it lives
      with. The new becomes threatening, the old reassuring.
    </blockquote>
  );
};

export default Blockquote;
