import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { icons } from 'assets';

import { dummydata } from 'utils';


const AccountsList = () => {
  return (       
    <FlatList 
        data={dummydata.balancesdata}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({item}) => {
        return (
        <View style={{marginLeft:20, marginTop:20,borderBottomWidth:0.5, borderColor:'#ddd'}}>
            <View style={{marginBottom:30}}>
                <Text style={{fontWeight:'400', fontSize:18, color:'#0033A9'}}>{item.name}</Text>
            </View>
            <View style={{marginBottom:20, flexDirection:'row'}}>
                <ImageBackground 
                  borderRadius={30}
                  source={icons.gradient} 
                  style={{height:60, width:60, borderRadius:30, backgroundColor:'red', justifyContent:'center', alignItems:'center',}}>
                  <Icon name="wallet" style={{color:'#fff'}}/>
                </ImageBackground>
                <View style={{flexDirection:'column',flex:1, justifyContent: 'center', marginLeft:10}}>
                  <Text style={{fontSize:20, marginBottom:5, fontWeight:'400'}}>{item.type}</Text>
                  <Text style={{fontSize:18, fontWeight:'400', color:'#555'}}>Available balance {item.balance}</Text>
                </View>
            </View>
        </View>
      )
    }}
  />
  )
}

export {AccountsList}