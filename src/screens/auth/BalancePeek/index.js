import React, { Component } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { AuthHeader } from 'common';
import { Icon } from 'native-base';
import { icons } from 'assets';
import { dummydata } from 'utils';
import { AccountsList } from './AccountList';

class BalancePeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
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

