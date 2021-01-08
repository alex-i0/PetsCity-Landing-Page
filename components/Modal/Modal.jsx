import { useRef, useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import CloseIcon from '../../public/assets/close-icon.svg';
import Typography from '../Typography/Typography';
import { subscribe } from './ModalAPI';
import ModalForm from './ModalStates/ModalForm';
import ModalStatus from './ModalStates/ModalStatus';
import { motion } from 'framer-motion';

const Modal = ({ isModalOpen, toggleModal }) => {
    const [pageYOffset, setPageYOffset] = useState(null);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const inputEl = useRef(null);

    useEffect(() => {
        setPageYOffset(window.pageYOffset);
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const signUpForMailSubscription = () => {
        subscribe(setMessage, setStatus, inputEl);
    };

    return (
        <motion.div
            animate={{ opacity: isModalOpen ? 1 : 0 }}
            className="modal-container"
            style={{ display: isModalOpen ? 'block' : 'none', top: pageYOffset }}
        >
            <div className="background" onClick={toggleModal}></div>
            <div className="card">
                <CloseIcon className="close-icon" onClick={toggleModal} />
                <Typography type="display" size="small">
                    Welcome in PetsCity
                </Typography>
                {message === '' ? (
                    <ModalForm signUp={signUpForMailSubscription} inputEl={inputEl} toggleModal={toggleModal} />
                ) : (
                    <ModalStatus subscriptionStatus={status} subscriptionMessage={message} />
                )}
            </div>
        </motion.div>
    );
};

Modal.propsTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
};

export default Modal;
