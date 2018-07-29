import React from 'react';
import { string } from 'prop-types';
import './style.scss';

function Heading({ text, className }) {
  return <h3 className={`heading ${className}`}>{text}</h3>;
}

Heading.propTypes = {
  text: string,
  className: string,
};
Heading.defaultProps = {
  text: '',
  className: '',
};

export default Heading;
