import { node } from 'prop-types';

const View = ({ children }) => <section className="view">{children}</section>;

View.propsTypes = {
    children: node.isRequired
};

export default View;
