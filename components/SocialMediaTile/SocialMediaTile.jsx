import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaTile = ({ value, link, icon }) => (
    <a className="socialMediaTile" href={link} target="_blank" rel="noopener" title={`${value} icon`}>
        <FontAwesomeIcon icon={icon} className="fontAwesomeIcon" />
    </a>
);

export default SocialMediaTile;
