import Image from 'next/image';

const BusinessCard = ({ title, image }) => (
    <div className="business-card-container">
        <div className="business-card">
            <Image src="/assets/business-plan.svg" width={500} height={500} loading="eager" alt="Analytical entrepreneur." />
        </div>
    </div>
);

export default BusinessCard;
