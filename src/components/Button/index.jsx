import React from 'react';
import { node, string, objectOf, shape, bool, func } from 'prop-types';
import './style.scss';

function Button({
  children, style, className, text, withoutText, handleClick,
}) {
  const withoutTextClass = withoutText ? 'btn--without-text' : '';
  return (
    <button className={`btn ${className} ${withoutTextClass}`} style={style} onClick={handleClick}>
      {text}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: node,
  style: objectOf(shape),
  className: string,
  text: string,
  withoutText: bool,
  handleClick: func,
};

Button.defaultProps = {
  children: null,
  style: {},
  className: '',
  text: '',
  withoutText: false,
  handleClick: () => {},
};

export default Button;
