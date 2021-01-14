import { string, object, number, oneOfType, node } from 'prop-types';

type TypographyProps = {
    children: unknown;
    type?: string;
    size?: string;
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
    type: string,
    size: string,
    className: string
};

export default Typography;
