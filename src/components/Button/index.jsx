import React from 'react';
import { node, string, objectOf, shape, bool } from 'prop-types';
import './style.scss';

function Button({
  children, style, className, text, withoutText,
}) {
  const withoutTextClass = withoutText ? 'btn--without-text' : '';
  return (
    <button className={`btn ${className} ${withoutTextClass}`} style={style}>
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
};

Button.defaultProps = {
  children: null,
  style: {},
  className: '',
  text: '',
  withoutText: false,
};

export default Button;
