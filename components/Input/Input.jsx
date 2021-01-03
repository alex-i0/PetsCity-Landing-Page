import { number, string, oneOfType, bool, node } from 'prop-types';

const Input = ({ placeholder, type, value, className, reference, required = false }) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        className={`input-component ${className}`}
        ref={reference}
        required={required}
    />
);

Input.propsTypes = {
    type: string.isRequired,
    placeholder: string.isRequired,
    value: oneOfType([string, number]),
    className: string,
    reference: node,
    required: bool
};

export default Input;
