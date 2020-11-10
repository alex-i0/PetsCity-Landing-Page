import React from 'react';
import Form from '../components/Form/Form';

const register = () => (
    <div className="register" id="register">
        <div className="contentContainer">
            <div className="header">
                <h2 className="title">Contact with our team</h2>
                <p className="description">
                    We are still working on the platform. Let us know that you are intrested and our professionals will contact you within
                    48 hours.
                </p>
            </div>
            <Form />
        </div>
        <div className="imageContainer">
            <img className="image" src="/assets/contact-with-professional.svg" alt="Contact with our professional team" />
        </div>
    </div>
);

export default register;
