import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Image } from 'react-native';
import { images, icons } from 'assets';
import { ScrollView } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <Container style={{backgroundColor:'#d6d6d6'}}>
            <Header style={{ backgroundColor:'#0033A9'}}>
              <Left/>
              <Body>
                    <Title style={{ color: '#fff' }}>
                        <Image source={icons.logo} style={{width:40, height:40}} />
                    </Title>
              </Body>
              <Right>
                  <Button transparent>
                        <Icon name='lock' type="FontAwesome" style={{fontSize: 25,color:'#fff'}}/>
                  </Button>
              </Right>
            </Header>
            <ScrollView style={{ padding: 15 }}>
                <View style={{
                    minHeight: 160,backgroundColor: '#fff', shadowColor: '#888',
                    shadowOpacity: 0.5, shadowOffset: { height: 3, width: 0 },marginBottom:15}}>
                    <View style={{height:100}}>
                        
                    </View>
                    <View style={{height:3, backgroundColor:'#c0c0c0'}}/>
                </View>
                <View style={{
                    height: 150, backgroundColor: '#fff', borderRadius: 5, shadowColor: '#888',
                    shadowOpacity: 0.5, shadowOffset: { height: 3, width: 0 }, padding: 5
                }}>
                    <View style={{height:'100%', borderWidth:1, borderRadius:3, borderColor:'#c0c0c0'}}>

                    </View>
                </View>
            </ScrollView>
      </Container >
    );
  }
}
