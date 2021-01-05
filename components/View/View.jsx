import { node, bool, string } from 'prop-types';

const View = ({ children, padding = true, className, id }) => (
    <section className={`view ${padding ? '--padding' : null} ${className}`} id={id}>
        {children}
    </section>
);

View.propsTypes = {
    children: node.isRequired,
    padding: bool,
    className: string
};

export default View;
