import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const About: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <View>
            <div className="about-container">
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -100 }
                    }}
                    initial="hidden"
                    transition={{ duration: 0.6 }}
                    className="text-content"
                >
                    <Typography type={'display-bold'} size={'medium'}>
                        We Are Here To Connect 🐾
                    </Typography>
                    <div>
                        <Typography type={'text'} size={'small'}>
                            <br />
                            <br />
                            At PetsCity, we recognize how hard is to find your dream pet. Therefore we want to give you a complete and
                            transparent solution.
                            <br />
                            <br />
                            We gathered many professional breeders with years of experience. With us, you can be sure that your dog or cat
                            comes from a<span style={{ fontWeight: 'bold' }}> good home</span>🏠.
                            <br />
                            <br />
                            We believe in love at first sight. However, sometimes it&apos;s not that easy. That&apos;s why we offer you the
                            possibility to consider over 2300 pets.
                        </Typography>
                    </div>
                </motion.div>
                <div className="image-container">
                    <Image src="/assets/about-person.svg" width={700} height={700} loading="eager" alt="Happy client with a new dog." />
                </div>
            </div>
        </View>
    );
};

export default About;
