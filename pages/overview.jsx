import React from 'react';
import Blockquote from '../components/Blockquote/Blockquote';
import styles from '../scss/pages/overview.module.scss';

const services = [
  {
    title: 'Easy to Use',
    icon: '/assets/001-money.png',
    description:
      'Looking for high quality pet care at an affordable price? How about receiving veterinarian care.',
    alt: 'Secure money',
  },
  {
    title: 'Read Reports',
    icon: '/assets/002-people.png',
    description:
      'Looking for high quality pet care at an affordable price? How about receiving veterinarian care.',
    alt: 'Online conversation',
  },
  {
    title: 'Real Time',
    icon: '/assets/003-bird.png',
    description:
      'Looking for high quality pet care at an affordable price? How about receiving veterinarian care.',
    alt: 'Blue parrot',
  },
];

const Overview = () => (
  <div className={styles.overview}>
    <div className={styles.servicesContainer}>
      <h2 className={styles.titleH2}>Control Your Business</h2>
      <div className={styles.servicesRow}>
        {services.map(({ title, icon, description, alt }, index) => (
          <div className={styles.serviceElement}>
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
        <h2 className={styles.titleH2}>Track Your Progress</h2>
        <p className={styles.description}>
          We focus on your recovery. We aim to bring this about as quickly as
          possible.
        </p>
        <Blockquote />
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <img
              className={styles.image}
              src="/assets/profile.jpg"
              alt="Profile photo"
              srcset=""
            />
          </div>
          <div className={styles.profileDescription}>
            <span className={styles.name}>Szymon Mituła</span>
            <span className={styles.jobTitle}>Pets.city CEO</span>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          width="320"
          height="240"
          autoplay="true"
          loop
        >
          <source src="/assets/dribbble.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default Overview;
