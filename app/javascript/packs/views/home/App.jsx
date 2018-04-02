import React from 'react';
import {connect} from 'react-redux';

import Room from './Room';
import Setup from './Setup';

class App extends React.Component {

  render() {
    return (
      <div>
        <Setup/>
        <Room/>
      </div>
    );
  }
}

export default connect(null, null)(App)