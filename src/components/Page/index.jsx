import React from 'react';
import CaptionArea from '../CaptionArea';
import NavBar from '../NavBar';
import Carousel from '../Carousel';
import './style.scss';

function Page() {
  const links = { design: '/design', news: '/news', vlog: '/vlog' };
  return (
    <div className="page">
      <div className="page__col--left">
        <NavBar links={links} />
        <div className="page__caption-area">
          <CaptionArea />
        </div>
      </div>
      <div className="page__col--center">
        <Carousel>
          <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'brown' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'purple' }} />
          <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }} />
        </Carousel>
      </div>
      <div className="page__col--right" />
    </div>
  );
}

export default Page;
