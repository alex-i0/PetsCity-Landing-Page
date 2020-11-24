import { string } from 'prop-types';

const Button = ({ text, size = null, type = null }) => <button className={`button-component ${size} ${type}`}>{text}</button>;

Button.propsTypes = {
    text: string.isRequired,
    size: string,
    type: string
};

export default Button;
