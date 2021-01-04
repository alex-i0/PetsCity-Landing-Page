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
            {/* <div className="checkbox">
                            <Checkbox />
                            <label className="checkboxText">
                                By clicking Sign Up, you agree to our Terms. Learn how we collect and use data in
                                <a className="highlight" href="/data_policy">
                                    Data Policy
                                </a>
                            </label>
                        </div> */}
        </div>
    </>
);

export default ModalForm;
