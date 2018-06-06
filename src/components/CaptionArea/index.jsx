import React from 'react';
import Button from '../Button';
import './style.scss';

function CaptionArea() {
  return (
    <div className="caption-area">
      <h2 className="caption-area__header">Hi, am Rex, a software DEV</h2>
      <div className="caption-area__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, natus? Dolorem dolore
        officia tempore, corporis ipsa non veritatis magni iste omnis placeat molestiae aspernatur
        natus rerum ipsum quo in sit.
      </div>
      <div className="caption-area__footer">
        <Button className="btn--light btn--arrow caption-area__btn" text="read more" />
      </div>
    </div>
  );
}

export default CaptionArea;
