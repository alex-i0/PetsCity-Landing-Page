type ButtonProps = {
    children: string;
    size?: string;
    type?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ children, size, type, className, onClick }: ButtonProps) => (
    <button className={`button-component --${size} --${type} ${className}`} onClick={onClick}>
        {children}
    </button>
);

export default Button;
