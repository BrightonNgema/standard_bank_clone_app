import React from 'react';
import {Text} from 'react-native';
import { StatusBar } from 'react-native';
import { Header, Left, Button, Icon, Body, Right } from 'native-base';

const AuthHeader = ({onBack, headerName}) => (
    <Header style={{backgroundColor:'#0033A9'}}>
        <StatusBar barStyle="light-content"/>
        <Left>
            <Button  transparent onPress={onBack}>
            <Icon name='chevron-left'type="MaterialIcons" style={{color:'#fff'}}/>
            </Button>
        </Left>
        <Body style={{flex: 3}}>
            <Text style={{color:'#fff', fontSize:18,}}>{headerName}</Text>
        </Body>
        <Right />
    </Header>
)

export { AuthHeader }
