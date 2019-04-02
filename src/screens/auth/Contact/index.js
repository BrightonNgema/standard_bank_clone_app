import React, { Component } from 'react';
import { View} from 'react-native';
import { AuthHeader } from 'common';
import { ContactList } from './ContactList';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <AuthHeader 
            headerName="Emergency Contact"
            onBack={() => this.props.navigation.goBack()}
        />
        <ContactList/>
      </View>
    );
  }
}

export { Contact }
