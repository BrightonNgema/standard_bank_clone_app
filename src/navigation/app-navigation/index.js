import React, {Component} from 'react';
// import { connect } from 'react-redux';
import { Auth, Main} from './navigate';

  class AppNavigation extends Component {

    render() {
        return <Main />  
      // const {isAuthenticated, isOnboarded} = this.props.user
      // if (!isAuthenticated) {
      //   return <Auth />;
      // } else {
      //   if (isOnboarded) {
      //     return <OnBoarding />;
      //   } else {
      //     return <Main/>
      //   }
      // }
    }
  }

  // export default connect(state => ({
  //   user: state.user
  // }))(AppNavigation);

  export default AppNavigation