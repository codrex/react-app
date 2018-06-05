import React, { PureComponent } from 'react';
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
    const links = ['design', 'news', 'vlog'];
    return (
      <div className="nav-bar">
        {NavBar.renderLogo()}
        <ul className="nav-bar__links">
          {links.map(link => NavBar.renderNavLink(`/${link}`, link))}
        </ul>
      </div>
    );
  }
}

export default NavBar;
