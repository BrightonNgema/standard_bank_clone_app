import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Image, StatusBar, Text} from "react-native";
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import { HomeStack } from './stack-navigation';
import { images, icons } from 'assets';
import { Profile, Default } from '../../../../../screens/main';
import Logout from './drawer-logout'


const CustomDrawerComponent = props => (
  <SafeAreaView>
     <StatusBar barStyle="light-content"/>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
        <Image source={images.logo} style={{width:'100%'}} resizeMode="contain"/>
      </View>
      <ScrollView>
          <DrawerItems {...props} />
         <Logout />
      </ScrollView>
  </SafeAreaView>
)

const MainNavigationStack = createDrawerNavigator({
  'Home':{
    screen: HomeStack,
    navigationOptions: (props) => ({
        drawerIcon:({tintColor}) =>(
          <Image source={icons.hospital}
            resizeMode="contain"
            style={{width:30, marginLeft:20}} 
          />
        )
    })
  },
  'Emergency':{
    screen:Profile,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.emergency}
          resizeMode="contain"
          style={{width:30, marginLeft:20}} 
        />
      )
  })
  },
  'Future Appointments':{
    screen:Default,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.hospital}
            resizeMode="contain"
            style={{width:30, marginLeft:20}} 
        />
      )
  })
  },
  'Health Pattern':{
    screen: Default,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.healthbook}
          resizeMode="contain"
          style={{width:30, marginLeft:20}} 
        />
      )
  })
  },
  'Meds':{
    screen: Default,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.meds}
          resizeMode="contain"
          style={{width:30, marginLeft:20}} 
        />
      )
  })
  },
  'Diet':{
    screen: Default,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.diet}
          resizeMode="contain"
          style={{width:30, marginLeft:20}} 
        />
      )
  })
  },
  'Universal Health Wallet':{
    screen: Default,
    navigationOptions: (props) => ({
      drawerIcon:({tintColor}) =>(
        <Image source={icons.donation}
          resizeMode="contain"
          style={{width:30, marginLeft:20}} 
        />
      )
  })
  }
},{
  contentComponent : CustomDrawerComponent,
  drawerOpenRoute: "DrawerOpen",
  drawerCloseRoute: "DrawerClose",
  drawerToggleRoute: "DrawerToggle",
  drawerBackgroundColor:'#fff'
});


class Main extends Component {

  render(){
    return <MainNavigationStack {...this.props}/>
  }
}

export {Main}