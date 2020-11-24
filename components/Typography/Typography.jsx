import { string, object } from 'prop-types';

const Typography = ({ children, type = null, style = null }) => (
    <span className={`typography-component ${type}`} style={style}>
        {children}
    </span>
);

Typography.propsTypes = {
    children: string.isRequired,
    type: string,
    style: object
};

export default Typography;
