import React from 'react';
import { render } from 'react-dom';
import AboutMe from './components/AboutMe';

import './styles/index.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AboutMe />
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
