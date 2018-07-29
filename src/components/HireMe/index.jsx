import React from 'react';
import Button from '../Button';
import bgImage from '../../images/painting.jpg?sizes[]=800,sizes[]=600,sizes[]=500,sizes[]=300'; //eslint-disable-line
import './style.scss';

function HireMe() {
  return (
    <div className="art-mind">
      <div className="art-mind__image-wrapper">
        <img className="art-mind__image" src={bgImage.src} srcSet={bgImage.srcSet} alt="art" />
      </div>
      <div className="art-mind__text">
        <div className="art-mind__mask">
          <h2 className="art-mind__lead-text">Art </h2>
          <h2 className="art-mind__lead-text"> mind</h2>
        </div>
        <h5 className="art-mind__sub-text">Art of mind</h5>
      </div>
      <div className="art-mind__card">
        <h2 className="art-mind__card__title">Looking for a freelancer for your project?</h2>
        <p className="art-mind__card__body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sunt eveniet doloremque,
          nesciunt blanditiis consectetur laboriosam porro quasi natus quae architecto? Est sapiente
          quasi pariatur error consequatur! Fugit, quibusdam! Numquam.
        </p>
        <Button text="more" className="art-mind__btn" />
      </div>
    </div>
  );
}

export default HireMe;
