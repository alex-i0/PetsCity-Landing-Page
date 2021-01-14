import { string, object, number, oneOfType, node, oneOf } from 'prop-types';

type Size = 'x-small' | 'small' | 'medium' | 'large';
type Type = 'display' | 'display-bold' | 'link' | 'text';

type TypographyProps = {
    children: unknown;
    type?: Type;
    size?: Size;
    style?: Record<string, unknown>;
    className?: string;
};

const Typography: React.FC<TypographyProps> = ({ children, type = null, style = null, className = null, size = null }: TypographyProps) => (
    <span className={`typography-component --${type} __${size} ${className}`} style={style}>
        {children}
    </span>
);

Typography.propTypes = {
    children: oneOfType([string, object, number, node]),
    type: oneOf(['display', 'display-bold', 'link', 'text']),
    size: oneOf(['x-small', 'small', 'medium', 'large']),
    className: string
};

export default Typography;
