import View from '../../View/View';
import Typography from '../../Typography/Typography';

const Description = () => (
    <View className="description-view">
        <div className="container">
            <Typography type={'--display-bold __medium'}>Why PetsCity</Typography>
            <Typography type={'--text __large'}>More than an business, it's an experience</Typography>
            <div>
                <div>
                    Verified Breeders
                    <hr />
                </div>
                <div>Secure Payment</div>
                <div>Pets Delivery</div>
                <div>Door to Door</div>
            </div>
        </div>
    </View>
);

export default Description;
