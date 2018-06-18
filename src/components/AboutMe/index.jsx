import React from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import './style.scss';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me__col about-me__col--left">
        <div className="about-me__row">
          <Avatar />
        </div>
      </div>
      <div className="about-me__col about-me__col--right">
        <h5 className="about-me__title">About me</h5>
        <h2 className="about-me__caption">Life long learner</h2>
        <p className="about-me__body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate nam aspernatur
          aliquam pariatur magnam, quasi maxime dignissimos explicabo labore reiciendis placeat amet
          accusamus facilis fuga minus harum qui quam in.
        </p>
        <Button text="more" className="about-me__btn" />
      </div>
    </div>
  );
}

export default AboutMe;
