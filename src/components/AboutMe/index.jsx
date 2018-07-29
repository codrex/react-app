import React from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import './style.scss';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__col about-me__col--left">
        <div className="about-me__avatar">
          <Avatar />
        </div>
      </div>
      <div className="about-me__col about-me__col--right">
        <h2 className="about-me__caption">Hi! am Rex Ogbemudia</h2>
        <p className="about-me__body">
          Am a software developer from Lagos, Nigeria. I currently work at Andela as a full-stack
          javascript developer
        </p>
        <Button text="more" className="about-me__btn" />
      </div>
    </div>
  );
}

export default AboutMe;
