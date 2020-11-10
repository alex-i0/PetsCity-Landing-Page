import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Vision from './vision';
import Register from './register';
import dynamic from 'next/dynamic';

const DynamicMessenger = dynamic(() => import('../components/Messenger/Messenger'), { ssr: false });

const breeders = () => (
    <div>
        <Head>
            <title>PetsCity | Breeders</title>
        </Head>
        <Navbar text={'Get a pet'} link={'/'} />
        <div className="breedersBackground">
            <img src="/assets/background.png" alt="City with people and animals" className="image" />
            <div className="breeders">
                <div className="header">
                    <h1 className="title">Join the Breeders of the Future</h1>
                    <p className="description">
                        PetsCity is an online platform and a wonderful community of people looking for a dream pet and reliable breeders
                        from all over the Europe.
                    </p>
                    <a href="/breeders#register">
                        <button className="buttonHighlight">Join Today</button>
                    </a>
                </div>
            </div>
        </div>
        <Vision />
        <Register />
        <Footer />
        <DynamicMessenger />
    </div>
);

export default breeders;
