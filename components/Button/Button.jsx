import { string } from 'prop-types';

const Button = ({ text, size = null }) => <button className={`button-component ${size}`}>{text}</button>;

Button.propsTypes = {
    text: string.isRequired,
    size: string
};

export default Button;
