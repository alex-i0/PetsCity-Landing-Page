import { string } from 'prop-types';

const Typography = ({ children, type = null }) => <span className={`typography-component ${type}`}>{children}</span>;

Typography.propsTypes = {
    children: string.isRequired,
    type: string
};

export default Typography;
