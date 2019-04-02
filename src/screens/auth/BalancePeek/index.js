import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { AuthHeader } from 'common';

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
      </View>
    );
  }
}

export { BalancePeek }

