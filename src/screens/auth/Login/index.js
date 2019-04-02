
import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';
import {icons} from 'assets'
import { BottomIcons } from './BottomIcons';

const {contact, graph, logo, wallet} = icons
const wallpaper = "https://images.unsplash.com/photo-1500368979884-522eb3985d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
const wallpaper2= "https://images.unsplash.com/photo-1500458124747-f31b1e140de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"

class Login extends Component{


  navigate = (nav) => {
    this.props.navigation.navigate(nav)
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={{uri:wallpaper}}>
        <StatusBar barStyle="light-content"/>
        <Image source={logo} style={{height:80, width:80, marginTop:'20%'}} resizeMode="contain"/>
        <Text style={styles.welcome}>Hello again,</Text>
        <Text style={styles.instructions}>Brighton!</Text>
        <TouchableOpacity 
          activeOpacity={0.8}
          style={{height:35, width:'80%',borderRadius:2 , backgroundColor:'#0033A9',marginTop:100, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#fff', fontWeight:'700'}}>APP SIGN-IN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.8}          
          style={{height:35, width:'80%',borderRadius:2, backgroundColor:'white',marginTop:20, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#007bff'}}>ONLINE BANKING SIGN-IN</Text>
        </TouchableOpacity>
          <Text style={{color:'#fff', marginTop:10, fontSize:12}}>Scan a QR code (SA only)</Text>
          <Text style={{color:'#fff', marginTop:30,fontSize:12}}>By signing in, I agree to the <Text style={{textDecorationLine:'underline'}} onPress={() => alert('T&Cs')}>{'T&Cs'}</Text></Text>
          <BottomIcons  onNav={this.navigate}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    marginTop: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export { Login }