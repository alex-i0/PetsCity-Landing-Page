import { useState } from 'react';
import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Image from 'next/image';
import Modal from '../../Modal/Modal';

const Waitlist: React.FC = () => {
    const [isModalOpen, setModal] = useState(false);

    const toggleModal = (modalStatus) => {
        setModal(!modalStatus);
    };

    return (
        <>
            <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <View padding={false} id="waitlist">
                <div className="waitlist-container">
                    <Typography type="display" size="small" className="heading">
                        <span className="highlight">PetsCity</span> is coming to Europe 🇪🇺
                    </Typography>
                    <Typography type="text" size="small">
                        The wait is almost over! We are thrilled to give you the tool you deserve to find your perfect fur friend. To stay
                        in the loop and get quicker access, join our waitlist today.
                    </Typography>
                    <Button size="medium" className="waitlist-button" onClick={() => toggleModal(isModalOpen)}>
                        Join Waitlist
                    </Button>
                </div>
                <div className="waitlist-image-container">
                    <Image
                        src="/assets/waitlist-icon.svg"
                        width={600}
                        height={600}
                        className="waitlist-image"
                        loading="eager"
                        alt="A person waiting for a PetsCity app launch."
                    />
                </div>
            </View>
        </>
    );
};

export default Waitlist;
