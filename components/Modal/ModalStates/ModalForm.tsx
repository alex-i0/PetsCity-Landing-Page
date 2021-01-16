import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import Link from 'next/link';
import Typography from '../../Typography/Typography';

type ModalFormPropTypes = {
    signUp: (Event) => void;
    inputEl: React.RefObject<HTMLInputElement>;
    toggleModal: React.MouseEventHandler<HTMLButtonElement>;
};

const ModalForm: React.FC<ModalFormPropTypes> = ({ signUp, inputEl, toggleModal }: ModalFormPropTypes) => (
    <form onSubmit={(e) => signUp(e)}>
        <Input placeholder="email" type="email" reference={inputEl} required />
        <div className="checkbox-holder">
            <Checkbox />
            <Typography type="text" size="x-small">
                Agree to our Terms and <Link href="/data_policy">Data Policy</Link>
            </Typography>
        </div>

        <div className="button-container">
            <Button size="small">Sign up</Button>
            <Button onClick={toggleModal} size="small" type="subtle">
                Skip for now
            </Button>
        </div>
    </form>
);

export default ModalForm;
