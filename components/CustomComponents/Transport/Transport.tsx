import View from '../../View/View';
import Typography from '../../Typography/Typography';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Transport: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <View id="transport">
            <div className="transport-container">
                <div className="image-container">
                    <Image
                        src="/assets/world-map.svg"
                        width={700}
                        height={700}
                        loading="eager"
                        alt="World map presenting the range of PetsCity."
                    />
                </div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 100 }
                    }}
                    initial="hidden"
                    transition={{ duration: 0.6 }}
                    className="text-container"
                >
                    <Typography type="display" size="small">
                        Stay Local, Reach Global 🌎
                    </Typography>
                    <br />
                    <Typography type="text" size="small">
                        With PetsCity, you can browse through over 200 hundred animals from all over Europe without moving from your sofa.
                        <br />
                        <br />
                        Thanks to our partnership with the certified transporting firms,{' '}
                        <a href="http://www.quick-trans.co.uk" rel="noreferrer" target="_blank" className="partner">
                            QuickTrans{' '}
                        </a>
                        and{' '}
                        <a href="http://petstravel.eu/" rel="noreferrer" target="_blank" className="partner">
                            PetsTravel
                        </a>
                        , we handle transport for you. Safe and stressful for your future pet!
                    </Typography>
                </motion.div>
            </div>
        </View>
    );
};

export default Transport;
