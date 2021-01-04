import Typography from '../../Typography/Typography';

const ModalStatus = ({ subscriptionMessage, subscriptionStatus }) => {
    const status = subscriptionStatus ? 'success' : 'error';

    return (
        <>
            <span className={`status-bar --${status}`}>
                <Typography type="link" size="small" className={`status-text --${status}`}>
                    {status}
                </Typography>
            </span>
            <Typography type="text" size="medium">
                {subscriptionMessage}
            </Typography>
        </>
    );
};

export default ModalStatus;
