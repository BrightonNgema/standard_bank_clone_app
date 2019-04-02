import React, { Component } from 'react';
import {AppNavigation} from 'navigation'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <AppNavigation />
    );
  }
}
