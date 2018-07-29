import React, { Component } from 'react';
import NavBar from '../NavBar';
import BigTextCaption from '../BigTextCaption';
import AboutMe from '../AboutMe';
import ProjectCard from '../ProjectCard';
import Heading from '../Heading';
import JCarousel from '../JCarousel';
import HireMe from '../HireMe';
import { NAV_LINKS } from '../../constants';

import './style.scss';

class PageTwo extends Component {
  static renderNavBar() {
    return (
      <NavBar
        links={NAV_LINKS}
        className="page-two__nav-bar"
        logoClass="page-two__logo"
        linksClass="page-two__nav-links"
        linkAnchorClass="page-two__nav-a"
      />
    );
  }

  render() {
    return (
      <div className="page-two">
        <div className="page-two__nav">{PageTwo.renderNavBar()}</div>
        <div className="page-two__hero-area">
          <BigTextCaption />
        </div>
        <div className="page-two__about-area">
          <AboutMe />
        </div>
        <Heading text="current stack" />
        <div className="page-two__stacks-area">
          <div className="page-two__stack">
            <ProjectCard title="react" />
          </div>
          <div className="page-two__stack">
            <ProjectCard title="node" />
          </div>
          <div className="page-two__stack">
            <ProjectCard title="express 4" />
          </div>
        </div>
        <Heading text="Projects i have worked on" className="heading--sm" />
        <div className="page-two__projects-area">
          <JCarousel>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'brown' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'purple' }} />
            <div style={{ width: '100%', height: '100%', backgroundColor: 'orange' }} />
          </JCarousel>
        </div>
        <Heading text="Hire me" />
        <div className="page-two__hire-me">
          <HireMe />
        </div>
      </div>
    );
  }
}

export default PageTwo;
