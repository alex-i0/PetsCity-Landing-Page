import { node, bool, string } from 'prop-types';
import { ReactNode } from 'react';

type ViewPropTypes = {
    children: ReactNode;
    padding?: boolean;
    className?: string;
    id?: string;
};

const View: React.FC<ViewPropTypes> = ({ children, padding = true, className = '', id }: ViewPropTypes) => (
    <section className={`view ${padding ? '--padding' : null} ${className}`} id={id}>
        {children}
    </section>
);

View.propTypes = {
    children: node.isRequired,
    padding: bool,
    className: string
};

export default View;
