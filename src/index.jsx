import React from 'react';
import { render } from 'react-dom';
import NavBar from './components/NavBar';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return <NavBar />;
  }
}
render(<App />, document.getElementById('app'));
