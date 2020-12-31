import { node, string, func } from 'prop-types';

const Button = ({ children, size = null, type = null, className = null, onClick = null }) => (
    <button className={`button-component --${size} --${type} ${className}`} onClick={onClick}>
        {children}
    </button>
);

Button.propsTypes = {
    children: node.isRequired,
    size: string,
    type: string,
    className: string,
    onClick: func
};

export default Button;
