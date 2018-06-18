import React, { PureComponent } from 'react';
import { string, objectOf, shape } from 'prop-types';
import './style.scss';

class NavBar extends PureComponent {
  static renderLogo(logoText = 'lines') {
    return <h1 className="nav-bar__logo">{logoText}</h1>;
  }

  static renderNavLink(url, text) {
    return (
      <li className="nav-bar__link">
        <a href={url} className="nav-bar__a">
          <span>{text}</span>
        </a>
      </li>
    );
  }
  render() {
    const { links, className, style } = this.props;
    return (
      <div className={`nav-bar ${className}`} style={style}>
        {NavBar.renderLogo()}
        <ul className="nav-bar__links">
          {Object.keys(links).map(link => NavBar.renderNavLink(links[link], link))}
        </ul>
      </div>
    );
  }
}

NavBar.propTypes = {
  links: objectOf(string).isRequired,
  className: string,
  style: objectOf(shape),
};

NavBar.defaultProps = {
  className: '',
  style: {},
};

export default NavBar;
