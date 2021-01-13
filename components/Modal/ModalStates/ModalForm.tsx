import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Checkbox from '../../Checkbox/Checkbox';
import Link from 'next/link';
import { ReactNode } from 'react';

type ModalFormPropTypes = {
    signUp: any;
    inputEl: ReactNode;
    toggleModal: React.MouseEventHandler<HTMLButtonElement>;
};

const ModalForm: React.FC<ModalFormPropTypes> = ({ signUp, inputEl, toggleModal }: ModalFormPropTypes) => (
    <form onSubmit={(e) => signUp(e)}>
        <Input placeholder="email" type="email" reference={inputEl} required />
        <div className="checkbox-holder">
            <Checkbox />
            <span>
                Check to agree to our Terms and <Link href="/data_policy">Data Policy</Link>
            </span>
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
