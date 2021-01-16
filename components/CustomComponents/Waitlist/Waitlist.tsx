import { useState } from 'react';
import View from '../../View/View';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
import Image from 'next/image';
import Modal from '../../Modal/Modal';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Waitlist: React.FC = () => {
    const [isModalOpen, setModal] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const toggleModal = (modalStatus) => {
        setModal(!modalStatus);
    };

    return (
        <>
            <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <View padding={false} id="waitlist">
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    initial="hidden"
                    transition={{ duration: 0.6 }}
                    className="waitlist-container"
                >
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
                </motion.div>
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
