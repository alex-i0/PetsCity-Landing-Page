import { string, object } from 'prop-types';

const Typography = ({ children, type = null, style = null, className = null }) => (
    <span className={`typography-component ${type} ${className}`} style={style}>
        {children}
    </span>
);

Typography.propsTypes = {
    children: string.isRequired,
    type: string,
    style: object,
    className: string
};

export default Typography;
