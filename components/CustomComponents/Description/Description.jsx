import View from '../../View/View';
import Typography from '../../Typography/Typography';

const Description = () => (
    <View className="description-view">
        <div className="container">
            <div className="header">
                <Typography type={'display-bold'} size={'medium'}>
                    We are committed to Safety
                </Typography>
                <br />
                <Typography type={'text'} size={'large'}>
                    More than an business, it's an experience
                </Typography>
            </div>

            <div className="service">
                <Typography type={'link'} size={'medium'}>
                    ✅ Verified Breeders
                </Typography>
                <hr />
                <Typography type={'text'} size={'small'}>
                    Get access to our full curriculum designed to make learning online interactive.
                </Typography>
            </div>
            <div className="service">
                <Typography type={'link'} size={'medium'}>
                    💳 Secure Payments
                </Typography>
                <hr />
                <Typography type={'text'} size={'small'}>
                    Payment process will secure both sides of the deal. We will always help you with a refund.
                </Typography>
            </div>
            <div className="service">
                <Typography type={'link'} size={'medium'}>
                    🐶 Pets Delivery
                </Typography>
                <hr />
                <Typography type={'text'} size={'small'}>
                    Get access to our full curriculum designed to make learning online interactive.
                </Typography>
            </div>
            <div className="service">
                <Typography type={'link'} size={'medium'}>
                    {' '}
                    🏠 Door to Door
                </Typography>
                <hr />
                <Typography type={'text'} size={'small'}>
                    Don't struggle with collecting pets. We will deliver your newest friend in comfortable and certified conditions.
                </Typography>
            </div>
        </div>
    </View>
);

export default Description;
