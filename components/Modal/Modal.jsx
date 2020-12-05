import { bool, func } from 'prop-types';
import CloseIcon from '../../public/assets/close-icon.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';

const Modal = ({ isModalOpen, toggleModal }) => {
    const [pageYOffset, setPageYOffset] = useState(null);

    useEffect(() => {
        setPageYOffset(window.pageYOffset);
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    return (
        <div className="modal-container" style={{ display: isModalOpen ? 'block' : 'none', top: pageYOffset }}>
            <div className="background" onClick={toggleModal}></div>
            <div className="card">
                <CloseIcon className="close-icon" onClick={toggleModal} />
                <Typography type={'--display-bold __small'}>Welcome in PetsCity</Typography>
                <Input placeholder="email" type="email" />
                <Button onClick={toggleModal} size={'--small'}>
                    Sign up
                </Button>
                <Button onClick={toggleModal} size={'--small'}>
                    Skip for now
                </Button>
            </div>
        </div>
    );
};

Modal.propsTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
};

export default Modal;
