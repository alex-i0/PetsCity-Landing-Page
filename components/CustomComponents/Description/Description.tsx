import View from '../../View/View';
import Typography from '../../Typography/Typography';

const Description: React.FC = () => (
    <View className="description-view" id="services">
        <div className="container">
            <div className="header">
                <Typography type="display-bold" size="small">
                    We Are Committed To The Safety
                </Typography>
                <br />
                <Typography type="text" size="medium">
                    More than an business, it's an experience
                </Typography>
            </div>

            <div className="service">
                <Typography type="link" size="medium">
                    ✅ Verified Breeders
                </Typography>
                <hr />
                <Typography type="text" size="small">
                    Our Breeders meet the requirements of FCI, FIFe, TICA, WCF, GCCF - a guarantee of adopting from a good source.
                </Typography>
            </div>
            <div className="service">
                <Typography type="link" size="medium">
                    💳 Secure Payments
                </Typography>
                <hr />
                <Typography type="text" size="small">
                    Payment process will secure both sides of the deal. We will always help you with a refund.
                </Typography>
            </div>
            <div className="service">
                <Typography type="link" size="medium">
                    🐶 Pets Delivery
                </Typography>
                <hr />
                <Typography type="text" size="small">
                    Our experienced partners will devliver your newest friend in comfortable and certified conditions.
                </Typography>
            </div>
            <div className="service">
                <Typography type="link" size="medium">
                    🏠 Door to Door
                </Typography>
                <hr />
                <Typography type="text" size="small">
                    Don't struggle with collecting your pet. We will deliver it right to your doors. It couldn't be easier.
                </Typography>
            </div>
        </div>
    </View>
);

export default Description;
