import React from 'react';
import Blockquote from '../components/Blockquote/Blockquote';
import styles from '../scss/pages/overview.module.scss';

const services = [
  {
    title: 'Easy & Safe',
    icon: '/assets/001-money.png',
    description:
      'Payment process will secure both sides of the deal. If something goes wrong, we will help you with refund.',
    alt: 'Secure money',
  },
  {
    title: 'Professional Transport',
    icon: '/assets/002-people.png',
    description:
      "Don't struggle with collecting pets. We will deliver your newest friend in comfortable and certified conditions.",
    alt: 'Online conversation',
  },
  {
    title: 'Top Breed',
    icon: '/assets/003-bird.png',
    description:
      'Looking for high quality pet care at an affordable price? How about receiving veterinarian care.',
    alt: 'Blue parrot',
  },
];

const Overview = () => (
  <div className={styles.overview} id="services">

    <div className={styles.servicesContainer}>
      <h2 className={styles.titleH2}>Enjoy Quality of Service</h2>
      <div className={styles.servicesRow}>
        {services.map(({ title, icon, description, alt }, index) => (

          <div className={styles.serviceElement} key={index}>
            <div className={styles.titleContainer}>
              <div className={styles.icon}>
                <img src={icon} alt={alt} />
              </div>

              <h3 className={styles.title}>{title}</h3>
              <span className={styles.spanSpace} />
            </div>

            <p className={styles.description}>{description}</p>
          </div>
          
        ))}
      </div>
    </div>

    <div className={styles.aboutContainer}>
      <div className={styles.testimonials}>
        <h2 className={styles.titleH2}>Complete Tool, Reliable Process</h2>
        <p className={styles.description}>
          We focus on dual benefits and comfort. Let your future pet friend find
          you with our tools.
        </p>
        <Blockquote
          text={
            '"We are the one and only place with the range over all Europe, where people can find dogs and cats from certified breeders."'
          }
        />
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img
              className={styles.image}
              src="/assets/profile.jpg"
              alt="Profile photo"
            />
          </div>
          <div className={styles.profileDescription}>
            <span className={styles.name}>Szymon Mituła</span>
            <span className={styles.jobTitle}>Pets.city, CEO</span>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          width="320"
          height="240"
          autoPlay={true}
          loop
          muted
        >
          <source src="/assets/dribbble.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default Overview;
