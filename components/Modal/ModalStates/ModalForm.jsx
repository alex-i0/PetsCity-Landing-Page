import Input from '../../Input/Input';
import Button from '../../Button/Button';

const ModalForm = ({ signUp, inputEl, toggleModal }) => (
    <>
        <Input placeholder="email" type="email" reference={inputEl} required />
        <div className="button-container">
            <Button onClick={signUp} size="small">
                Sign up
            </Button>
            <Button onClick={toggleModal} size="small" type="subtle">
                Skip for now
            </Button>
        </div>
    </>
);

export default ModalForm;
