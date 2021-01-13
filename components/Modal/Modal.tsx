import { useRef, useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import CloseIcon from '../../public/assets/close-icon.svg';
import Typography from '../Typography/Typography';
import { subscribe } from './ModalAPI';
import ModalForm from './ModalStates/ModalForm';
import ModalStatus from './ModalStates/ModalStatus';
import { motion } from 'framer-motion';

type ModalPropTypes = {
    isModalOpen: boolean;
    toggleModal: void;
};

const Modal: React.FC<ModalPropTypes> = ({ isModalOpen, toggleModal }: ModalPropTypes) => {
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

    const signUpForMailSubscription = (event) => {
        subscribe(setMessage, setStatus, inputEl);
        event.preventDefault();
    };

    return (
        <motion.div
            animate={{ opacity: isModalOpen ? 1 : 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
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

Modal.propTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
};

export default Modal;
