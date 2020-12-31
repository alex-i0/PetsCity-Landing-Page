import { string, object } from 'prop-types';

const Typography = ({ children, type = null, style = null, className = null, size = null }) => (
    <span className={`typography-component --${type} __${size} ${className}`} style={style}>
        {children}
    </span>
);

Typography.propsTypes = {
    children: string.isRequired,
    type: string,
    size: string,
    style: object,
    className: string
};

export default Typography;
