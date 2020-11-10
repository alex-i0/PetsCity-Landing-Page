import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Form = () => (
    <form className="form">
        <input type="text" className="nameInput" placeholder="Name" required />
        <input type="email" className="emailInput" placeholder="Email address" required />
        <div className="checkbox">
            <Checkbox />
            <label className="checkboxText">
                By clicking Sign Up, you agree to our Terms. Learn how we collect and use data in
                <a className="highlight" href="/data_policy">
                    {' Data Policy'}
                </a>
            </label>
        </div>
        <button className="submit">Join us</button>
    </form>
);

export default Form;
