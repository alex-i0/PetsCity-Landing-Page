import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { dataPolicy } from '../data/dataPolicy';

const data_policy = () => (
    <div>
        <Head>
            <title>PetsCity | Data Policy</title>
        </Head>
        <Navbar />
        <div className="dataPolicy">
            <section className="section">
                {dataPolicy.map(({ title, text }, index) => (
                    <details className="details" key={index}>
                        <summary className="summary">{title}</summary>
                        <div className="div">
                            <p className="p">{text}</p>
                        </div>
                    </details>
                ))}
            </section>
        </div>
        <Footer />
    </div>
);

export default data_policy;
