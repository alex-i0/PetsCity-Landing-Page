import { node, string } from 'prop-types';

const Button = ({ children, size = null, type = null, className = null }) => (
    <button className={`button-component ${size} ${type} ${className}`}>{children}</button>
);

Button.propsTypes = {
    children: node.isRequired,
    size: string,
    type: string,
    className: string
};

export default Button;
