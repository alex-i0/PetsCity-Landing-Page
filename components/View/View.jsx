import { node, bool } from 'prop-types';

const View = ({ children, padding = true }) => <section className={`view ${padding ? '--padding' : null}`}>{children}</section>;

View.propsTypes = {
    children: node.isRequired,
    padding: bool
};

export default View;
