import React from 'react';
import Link from 'next/link';
import Typography from '../Typography/Typography';

const Footer = () => (
    <div className="footer">
        <div className="contact-badges">
            <a href="mailto:hello@pets.city" className="contact-badge --email">
                <Typography type={'--link __x-small'} className={'text-email'}>
                    hello@pets.city
                </Typography>
            </a>
            <a href="tel:5551234567" className="contact-badge --phone">
                <Typography type={'--link __x-small'} className={'text-phone'}>
                    +44 7927 188531
                </Typography>
            </a>
        </div>
        <span className="copyright">
            <Typography type={'--text __x-small'}>Copyright © 2019-2020 Pets.City. All rights reserved.</Typography>
        </span>
        <span className="policy-link">
            <Link href="/data_policy">
                <a className="highlight">
                    <Typography type={'--text __x-small'}>Data Policy</Typography>
                </a>
            </Link>
        </span>
    </div>
);

export default Footer;
