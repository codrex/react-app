import React from 'react';
import { func, objectOf, shape, string } from 'prop-types';
import './style.scss';

function MenuIcon({ handleClick, className, style }) {
  return (
    <div
      onClick={handleClick}
      role="presentation"
      style={style}
      className={`menu-icon ${className}`}
    >
      <div className="menu-icon__icon" />
    </div>
  );
}

MenuIcon.propTypes = {
  handleClick: func,
  style: objectOf(shape),
  className: string,
};

MenuIcon.defaultProps = {
  handleClick: () => {},
  style: {},
  className: '',
};

export default MenuIcon;
