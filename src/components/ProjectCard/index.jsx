import React from 'react';
import { string } from 'prop-types';
import './style.scss';

function ProjectCard({ title, picture }) {
  return (
    <div className="project-card">
      <div className="project-card__top">
        <img src={picture} alt={title} />
      </div>
      <div className="project-card__bottom">
        <p className="project-card__title">{title}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: string.isRequired,
  picture: string.isRequired,
};

export default ProjectCard;
