import React from 'react';
import styles from './SocialMediaTile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaTile = ({ value, link, icon }) => (
  <a
    className={styles.socialMediaTile}
    href={link}
    target="_blank"
    rel="noopener"
  >
    <FontAwesomeIcon icon={icon} className={styles.fontAwesomeIcon} />
  </a>
);

export default SocialMediaTile;
