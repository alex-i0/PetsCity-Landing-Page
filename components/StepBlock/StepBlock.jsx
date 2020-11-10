import React from 'react';

const StepBlock = ({ title, number, image, text }) => (
    <div className={`stepBlock ${number % 2 === 0 ? 'stepBlockReverse' : null}`}>
        <div className="contentContainer">
            <h1 className="title">
                <span className="numberHighlight">{`#${number}`}</span>
                {title}
            </h1>
            <p className="text">{text}</p>
        </div>
        <div className="imageContainer">
            <img className="image" src={image} alt="" />
        </div>
    </div>
);

export default StepBlock;
