import { string } from 'prop-types';

type TypographyProps = {
    children: React.ReactChild;
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
    children: string.isRequired,
    type: string,
    size: string,
    className: string
};

export default Typography;
