import React from 'react';

const Footer = () => (
    <div className="footer">
        <span className="footer-contact">
            <a href="mailto:hello@pets.city" className="email">
                hello@pets.city
            </a>
            <a href="tel:5551234567" className="phone">
                +44 7927 188531
            </a>
        </span>
        <span className="text">Copyright © 2019-2020 Pets.City. All rights reserved.</span>
        <span className="text">
            <a href="/data_policy" className="highlight">
                Data Policy
            </a>
        </span>
    </div>
);

export default Footer;
