import React, { Component } from 'react';
import { View} from 'react-native';
import { AuthHeader } from 'common';
import { AccountsList } from './AccountList';


class BalancePeek extends Component{
  render(){
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <AuthHeader 
            headerName="Balance Peek"
            onBack={() => this.props.navigation.goBack()}
        />
        <AccountsList />
      </View>
    );
  }
}

export { BalancePeek }

