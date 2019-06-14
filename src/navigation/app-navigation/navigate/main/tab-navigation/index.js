import React, {Component} from 'react';
import { createBottomTabNavigator, } from 'react-navigation';
import { Image } from 'react-native';
import { icons } from 'assets';
import { main } from 'screens';




const MainNavigationStack = createBottomTabNavigator({
  'Home':{
    screen: main.Home,
    navigationOptions: (props) => ({
      tabBarIcon:({tintColor}) =>(
          <Image source={tintColor === '#007bff' ? icons.home_blue : icons.home_grey}
            resizeMode="contain"
            style={{width:22}} 
          />
        )
    })
  },
  'Pay':{
    screen: () => null,
    navigationOptions: (props) => ({
      tabBarIcon: ({ tintColor }) => (
        <Image source={tintColor === '#007bff' ? icons.card_blue : icons.card_grey}
          resizeMode="contain"
          style={{ width: 22, marginTop:-10 }}
        />
      )
  })
  },
  'Transfer':{
    screen: () =>  null,
    navigationOptions: (props) => ({
      tabBarIcon: ({ tintColor }) => (
        <Image source={tintColor === '#007bff' ? icons.transfer_blue : icons.transfer_grey}
          resizeMode="contain"
          style={{ width: 22, }}
        />
      )
  })
  },
  'Buy':{
    screen: () =>  null,
    navigationOptions: (props) => ({
      tabBarIcon: ({ tintColor }) => (
        <Image source={tintColor === '#007bff' ? icons.cart_blue : icons.cart_grey}
          resizeMode="contain"
          style={{ width: 22 }}
        />
      )
  })
  },
  'More': {
    screen: () => null,
    navigationOptions: (props) => ({
      tabBarIcon: ({ tintColor }) => (
        <Image source={tintColor === '#007bff' ? icons.menu_blue : icons.menu_grey}
          resizeMode="contain"
          style={{ width: 22 }}
        />
      )
    })
  }
}, {
    tabBarOptions: {
      activeTintColor: '#007bff',
    inactiveTintColor: '#888',
  
      style: {
        backgroundColor: "white",
        height: 55,
        borderTopColor: 'transparent',
        borderTopWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        borderTopWidth: 1,
        borderTopColor:'rgba(200,200, 200, 0.3)'
      
      }
    }
});


class Main extends Component {

  render(){
    return <MainNavigationStack {...this.props}/>
  }
}

export {Main}