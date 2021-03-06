import { string, bool } from 'prop-types';

type InputProps = {
    placeholder: string;
    type: string;
    value?: [string];
    className?: string;
    reference?: React.LegacyRef<HTMLInputElement>;
    required?: boolean;
};

const Input: React.FC<InputProps> = ({ placeholder, type, value, className, reference, required = false }: InputProps) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        className={`input-component ${className}`}
        ref={reference}
        required={required}
    />
);

Input.propTypes = {
    type: string.isRequired,
    placeholder: string.isRequired,
    className: string,
    required: bool
};

export default Input;
