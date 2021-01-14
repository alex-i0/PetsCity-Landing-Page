import dynamic from 'next/dynamic';

const DynamicMessenger = dynamic(() => import('./Messenger'), { ssr: false });

const MessengerDynamicImport: React.FC = () => {
    return <DynamicMessenger />;
};

export default MessengerDynamicImport;
