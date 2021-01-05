import Image from 'next/image';
import Typography from '../../Typography/Typography';

const BusinessCard = ({ title, image }) => (
    <div className="business-card-container">
        <div className="business-card">
            {/* <Typography type="link" size="medium">
                {title}
            </Typography> */}
            <Image src="/assets/business-plan.svg" width={500} height={500} loading="eager" />
        </div>
    </div>
);

export default BusinessCard;
