import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { AuthHeader } from 'common';
import { ForexList } from './ForexList';
import { ForexHeader } from './ForexHeader';
import { ForexFooter } from './ForexFooter';


class Forex extends Component{
  render(){
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <AuthHeader 
          headerName="Forex Rates - ZAR"
          onBack={() => this.props.navigation.goBack()}
        />
        <ForexHeader />
        <ForexList />
        <ForexFooter />
      </View>
    );
  } 
}
export { Forex }
