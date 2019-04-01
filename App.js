/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';

const wallpaper = "https://images.unsplash.com/photo-1500368979884-522eb3985d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
const wallpaper2= "https://images.unsplash.com/photo-1500458124747-f31b1e140de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"

export default class App extends Component{
  render() {
    return (
      <ImageBackground style={styles.container} source={{uri:wallpaper}}>
        <StatusBar barStyle="light-content"/>
        <Image source={require('./src/images/logo.png')} style={{height:100, width:100, marginTop:'20%'}} resizeMode="contain"/>
        <Text style={styles.welcome}>Hello again,</Text>
        <Text style={styles.instructions}>Brighton!</Text>
        <TouchableOpacity 
          activeOpacity={0.8}
          style={{height:30, width:'80%', backgroundColor:'blue',marginTop:100, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#fff'}}>APP SIGN-IN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.8}          
          style={{height:30, width:'80%', backgroundColor:'white',marginTop:20, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'blue'}}>ONLINE BANKING SIGN-IN</Text>
        </TouchableOpacity>
          <Text style={{color:'#fff', marginTop:10}}>Scan a QR code (SA only)</Text>
          <Text style={{color:'#fff', marginTop:20}}>By signing in, I agree to the <Text style={{textDecorationLine:'underline'}} onPress={() => alert('T&Cs')}>{'T&Cs'}</Text></Text>
          <View style={{width:'60%', flexDirection: 'row', height:100, position:'absolute', bottom:30, justifyContent:'space-between', alignItems:'center'}}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Balance')}>
            <Image source={{uri:'https://img.icons8.com/wired/64/ffffff/wallet.png'}} style={{height:30, width:30,alignSelf:'center', marginBottom:10 }} resizeMode="contain"/>
            <Text style={{color:'#fff', textAlign:'center'}}>Balances</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Forex')}>
            <Image source={require('./src/images/graph.png')} style={{height:30, width:30,alignSelf:'center', marginBottom:10 }} resizeMode="contain"/>
            <Text style={{color:'#fff', textAlign:'center'}}>Forex</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Contact')}>
            <Image source={require('./src/images/contact.png')} style={{height:30, width:30,alignSelf:'center', marginBottom:10 }} resizeMode="contain"/>
            <Text style={{color:'#fff', textAlign:'center'}}>Contact</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>
    );b
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
