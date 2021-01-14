import Typography from '../../Typography/Typography';

type ModalStatusPropTypes = {
    subscriptionMessage: string;
    subscriptionStatus: string;
};

const ModalStatus: React.FC<ModalStatusPropTypes> = ({ subscriptionMessage, subscriptionStatus }: ModalStatusPropTypes) => {
    const status = subscriptionStatus ? 'success' : 'error';

    return (
        <>
            <span className={`status-bar --${status}`}>
                <Typography type="link" size="small" className={`status-text --${status}`}>
                    {`${status}`}
                </Typography>
            </span>
            <Typography type="text" size="medium">
                {`${subscriptionMessage}`}
            </Typography>
        </>
    );
};

export default ModalStatus;
