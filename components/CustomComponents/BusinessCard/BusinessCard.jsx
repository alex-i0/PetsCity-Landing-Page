import Image from 'next/image';
import Typography from '../../Typography/Typography';

const BusinessCard = ({ title, image }) => (
    <div className="business-card">
        <Typography type="link" size="medium">
            {title}
        </Typography>
        <Image src="/assets/animal-header.svg" width={400} height={400} />
    </div>
);

export default BusinessCard;
