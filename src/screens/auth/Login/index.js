import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native';
import {icons , images} from 'assets'
import { BottomIcons } from './BottomIcons';
const {logo} = icons

class Login extends Component{

  navigate = (nav) => this.props.navigation.navigate(nav)

  render() {
    return (
      <ImageBackground style={styles.container} source={images.background}>
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
          <Text style={{color:'#fff', marginTop:30,fontSize:12}}>By signing in, I agree to the <Text style={{textDecorationLine:'underline'}} 
                onPress={() => alert('T&Cs')}>{'T&Cs'}</Text>
          </Text>
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
  }
});

export { Login }