import React, { PureComponent } from 'react';
import { string, objectOf, shape } from 'prop-types';
import './style.scss';

class NavBar extends PureComponent {
  renderLogo() {
    const { logoText, logoClass } = this.props;
    return <h1 className={`nav-bar__logo ${logoClass}`}>{logoText}</h1>;
  }

  renderNavLink(url, text) {
    const { linkClass, linkAnchorClass } = this.props;
    return (
      <li className={`nav-bar__link ${linkClass}`}>
        <a href={url} className={`nav-bar__a ${linkAnchorClass}`}>
          <span>{text}</span>
        </a>
      </li>
    );
  }
  render() {
    const {
      links, className, style, linksClass,
    } = this.props;
    return (
      <div className={`nav-bar ${className}`} style={style}>
        {this.renderLogo()}
        <ul className={`nav-bar__links ${linksClass}`}>
          {Object.keys(links).map(link => this.renderNavLink(links[link], link))}
        </ul>
      </div>
    );
  }
}

NavBar.propTypes = {
  links: objectOf(string).isRequired,
  className: string,
  style: objectOf(shape),
  linksClass: string,
  linkClass: string,
  linkAnchorClass: string,
  logoClass: string,
  logoText: string,
};

NavBar.defaultProps = {
  className: '',
  style: {},
  linksClass: '',
  linkClass: '',
  linkAnchorClass: '',
  logoClass: '',
  logoText: 'RO',
};

export default NavBar;
