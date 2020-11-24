import React from 'react';
import InstagramIcon from '../../public/assets/instagram-icon.svg';
import FacebookIcon from '../../public/assets/facebook-icon.svg';
import LinkedinIcon from '../../public/assets/linkedin-icon.svg';
import Link from 'next/link';

const SocialMediaLink = () => (
    <div className="link-group">
        <Link href="https://www.instagram.com/transservicetransport/">
            <a target="_blank">
                <InstagramIcon />
            </a>
        </Link>

        <Link href="https://www.facebook.com/pets.city1">
            <a target="_blank">
                <FacebookIcon />
            </a>
        </Link>

        <Link href="https://www.linkedin.com/feed/">
            <a target="_blank">
                <LinkedinIcon />
            </a>
        </Link>
    </div>
);

export default SocialMediaLink;
