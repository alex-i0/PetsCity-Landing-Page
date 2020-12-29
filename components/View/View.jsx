import { node, bool, string } from 'prop-types';

const View = ({ children, padding = true, className }) => (
    <section className={`view ${padding ? '--padding' : null} ${className}`}>{children}</section>
);

View.propsTypes = {
    children: node.isRequired,
    padding: bool,
    className: string
};

export default View;
