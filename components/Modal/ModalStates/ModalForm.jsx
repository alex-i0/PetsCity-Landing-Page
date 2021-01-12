import Input from '../../Input/Input';
import Button from '../../Button/Button';

const ModalForm = ({ signUp, inputEl, toggleModal }) => (
    <form onSubmit={(e) => signUp(e)} action={false}>
        <Input placeholder="email" type="email" reference={inputEl} required />
        <div className="button-container">
            <Button size="small">Sign up</Button>
            <Button onClick={toggleModal} size="small" type="subtle">
                Skip for now
            </Button>
        </div>
    </form>
);

export default ModalForm;
