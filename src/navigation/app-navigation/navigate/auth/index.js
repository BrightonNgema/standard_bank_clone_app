import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {auth} from 'screens';

const {Login, BalancePeek,Forex,Contact} = auth;


const Auth = ()  => {
  return <AuthNavigationStack />;
}

const AuthNavigationStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  BalancePeek: {
    screen: BalancePeek,
    navigationOptions: {
      header: null,
    }
  },
  Forex: {
    screen: Forex,
    navigationOptions: {
      header: null,
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      header: null,
    }
  }
});

export {Auth}