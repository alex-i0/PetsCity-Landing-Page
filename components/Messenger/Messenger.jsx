import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
    const PAGE_ID = process.env.FB_PAGE_ID;
    const APP_ID = process.env.FB_APP_ID;
    return <MessengerCustomerChat pageId={'2212800995661774'} appId={'2726743354263687'} />;
};

export default Messenger;
