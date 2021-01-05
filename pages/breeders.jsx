import NextHead from '../components/NextHead/NextHead';
import Navbar from '../components/Navbar/Navbar';
import BreedersHeader from '../components/CustomComponents/BreedersHeader/BreedersHeader';
import dynamic from 'next/dynamic';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const breeders = () => (
    <>
        <NextHead title="PetsCity | Breeders" />
        <Navbar buttonText="Get a Pet" />
        <BreedersHeader />
        <DynamicMessenger />
    </>
);

export default breeders;
