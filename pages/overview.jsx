import React from 'react';
import Blockquote from '../components/Blockquote/Blockquote';

const services = [
    {
        title: 'Easy & Safe',
        icon: '/assets/001-money.png',
        description: 'Payment process will secure both sides of the deal. If something goes wrong, we will help you with refund.',
        alt: 'Secure money'
    },
    {
        title: 'Professional Transport',
        icon: '/assets/002-people.png',
        description: "Don't struggle with collecting pets. We will deliver your newest friend in comfortable and certified conditions.",
        alt: 'Online conversation'
    },
    {
        title: 'Top Breed',
        icon: '/assets/003-bird.png',
        description: 'Looking for high quality pet care at an affordable price? How about receiving veterinarian care.',
        alt: 'Blue parrot'
    }
];

const Overview = () => (
    <div className="overview" id="services">
        <div className="servicesContainer">
            <h2 className="titleH2">Enjoy Quality of Service</h2>
            <div className="servicesRow">
                {services.map(({ title, icon, description, alt }, index) => (
                    <div className="serviceElement" key={index}>
                        <div className="titleContainer">
                            <div className="icon">
                                <img src={icon} alt={alt} />
                            </div>

                            <h3 className="title">{title}</h3>
                            <span className="spanSpace" />
                        </div>

                        <p className="description">{description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="aboutContainer">
            <div className="testimonials">
                <h2 className="titleH2">Complete Tool, Reliable Process</h2>
                <p className="description">We focus on dual benefits and comfort. Let your future pet friend find you with our tools.</p>
                <Blockquote
                    text={
                        '"We are the one and only place with the range over all Europe, where people can find dogs and cats from certified breeders."'
                    }
                />
                <div className="profile">
                    <div className="profileImage">
                        <img className="image" src="/assets/profile.jpg" alt="Profile photo" />
                    </div>
                    <div className="profileDescription">
                        <span className="name">Szymon Mituła</span>
                        <span className="jobTitle">Pets.city, CEO</span>
                    </div>
                </div>
            </div>
            <div className="videoContainer">
                <video className="video" width="320" height="240" autoPlay={true} loop muted>
                    <source src="/assets/dribbble.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
);

export default Overview;
