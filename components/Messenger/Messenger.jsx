import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
    const PAGE_ID = process.env.FB_PAGE_ID;
    const APP_ID = process.env.FB_APP_ID;
    return <MessengerCustomerChat pageId={PAGE_ID} appId={APP_ID} />;
};

export default Messenger;
