import React from 'react';
import { render } from 'react-dom';
import PageTwo from './components/PageTwo';

import './styles/index.scss';

/*eslint-disable*/
class App extends React.Component {
  render() {
    return <PageTwo />;
  }
}
render(<App />, document.getElementById('app'));
