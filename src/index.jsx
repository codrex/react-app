import React from 'react';
import { render } from 'react-dom';
import MenuIcon from './components/MenuIcon';

import './styles.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return <MenuIcon />;
  }
}
render(<App />, document.getElementById('app'));
