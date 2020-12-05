import { number, string, oneOfType } from 'prop-types';

const Input = ({ placeholder, type, value, className }) => (
    <input placeholder={placeholder} type={type} value={value} className={`input-component ${className}`} />
);

Input.propsTypes = {
    type: string.isRequired,
    placeholder: string.isRequired,
    value: oneOfType([string, number]),
    className: string
};

export default Input;
