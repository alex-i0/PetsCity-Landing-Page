import dynamic from 'next/dynamic';

const DynamicMessenger = dynamic(() => import('./Messenger'), { ssr: false });

const MessengerDynamicImport: React.FC = () => <DynamicMessenger />;

export default MessengerDynamicImport;
