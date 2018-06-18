import React from 'react';
import rexAvatar from '../../images/avatar.jpeg?sizes[]=400'; //eslint-disable-line
import './style.scss';

function Avatar() {
  return (
    <div className="avatar">
      <img src={rexAvatar.src} alt="my avatar" />
    </div>
  );
}

export default Avatar;
