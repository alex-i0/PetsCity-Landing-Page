import { string } from 'prop-types';

const Typography = ({ text, type = null }) => <span className={`typography-component ${type}`}>{text}</span>;

Typography.propsTypes = {
    text: string.isRequired,
    type: string
};

export default Typography;
