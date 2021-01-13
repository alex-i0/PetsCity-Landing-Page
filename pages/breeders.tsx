import { useState } from 'react';
import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import BreedersHeader from '../components/CustomComponents/BreedersHeader/BreedersHeader';
import dynamic from 'next/dynamic';
import Modal from '../components/Modal/Modal';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const Breeders: React.FC = () => {
    const [isModalOpen, setModal] = useState(false);

    const toggleModal = (modalStatus) => {
        setModal(!modalStatus);
    };
    return (
        <>
            <NextHead title="PetsCity | Breeders" />
            <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />
            <Navbar buttonText="Get a Pet" />
            <BreedersHeader onClick={() => toggleModal(isModalOpen)} />
            <DynamicMessenger />
        </>
    );
};

export default Breeders;
