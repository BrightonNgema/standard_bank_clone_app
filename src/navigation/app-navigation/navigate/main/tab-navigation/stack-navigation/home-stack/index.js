import React, { Component } from 'react';
import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import {main} from 'screens';

const {Home} = main

class HomeStack extends Component {
    state = {
      userId:''
    };
  
  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    try {
      const userJson = await AsyncStorage.getItem('@ConsumerUserInfo');
      if (userJson !== null) {
        const userArray = JSON.parse(userJson);
        this.setState({
          userId:userArray.userId
        });
      }
    } catch (error) {}
  };

  render() {
    const drawer =  this.props
    const HomeNavigation = createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions:(props, drawer) => ({
          header:null,
          tabBarVisible: false,
          gesturesEnabled: false
        })
      }
    });

    const {userId} = this.state
    return <HomeNavigation screenProps={{userId, ...drawer.navigation}} nav={{drawer}}/>;
  }
}

export {HomeStack};
