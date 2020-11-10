import React from 'react';
import StepBlock from '../components/StepBlock/StepBlock';
import { stepsData } from '../data/stepsData';

const vision = () => (
    <div className="vision">
        <div className="header">
            <h2 className="title">How it works?</h2>
            <p className="description">We're procceding your application, and will notify once we're done.</p>
        </div>
        <div className="steps">
            {stepsData.map(({ title, text, image }, index) => (
                <StepBlock title={title} text={text} image={image} number={index + 1} key={index} />
            ))}
        </div>
    </div>
);

export default vision;
