import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => <MessengerCustomerChat pageId={process.env.FB_PAGE_ID} appId={process.env.FB_APP_ID} />;

export default Messenger;
