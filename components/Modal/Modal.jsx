import { useRef, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { bool, func } from 'prop-types';
import CloseIcon from '../../public/assets/close-icon.svg';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';

const Modal = ({ isModalOpen, toggleModal }) => {
    const [pageYOffset, setPageYOffset] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setPageYOffset(window.pageYOffset);
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const inputEl = useRef(null);

    const subscribe = async () => {
        // e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        console.log('Subscribe Function');
        console.log(inputEl.current.value);
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error);
            console.log(error);

            return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = '';
        setMessage('Success! 🎉 You are now subscribed to the newsletter.');
        console.log(message);
    };

    const signUpForMailSubscription = () => {
        toggleModal(true);
        subscribe();
    };

    return (
        <div className="modal-container" style={{ display: isModalOpen ? 'block' : 'none', top: pageYOffset }}>
            <div className="background" onClick={toggleModal}></div>
            <div className="card">
                <CloseIcon className="close-icon" onClick={toggleModal} />
                <Typography type={'display-bold'} size={'small'}>
                    Welcome in PetsCity
                </Typography>
                <Input placeholder="email" type="email" reference={inputEl} required />
                <div className="button-container">
                    <Button onClick={signUpForMailSubscription} size={'small'}>
                        Sign up
                    </Button>
                    <Button onClick={toggleModal} size={'small'}>
                        Skip for now
                    </Button>
                </div>
            </div>
        </div>
    );
};

Modal.propsTypes = {
    isModalOpen: bool.isRequired,
    toggleModal: func.isRequired
};

export default Modal;
