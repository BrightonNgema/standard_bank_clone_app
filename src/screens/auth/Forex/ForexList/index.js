import React from 'react'
import { View, Text,Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { dummydata } from 'utils';

const ForexList = () => {
    return (
        <FlatList 
            data={dummydata.forexdata}
            keyExtractor={(item, index) => index.toString()}

            renderItem={({item}) => {
            return (
                <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:0.5,paddingVertical:15.1,borderBottomColor:'#ddd',}}>
                    <View style={{height:40, width:40,marginLeft:10, backgroundColor:'red', borderRadius:30,overflow:'hidden',}}>
                        <Image source={{uri:item.countryImage}}  style={{height:70,width:70,position:'absolute', top:-16, left:-15}}/>
                    </View>
                    <Text style={{top:10, left:10, flex:0.7}}>{item.currency}</Text>
                    <Text style={{textAlign:'right', top:10, right:0, flex:0.3}}>{item.trade}</Text>
                    <Icon name="chevron-right" type="MaterialIcons" style={{textAlign:'right',marginRight:10,  color:'#00A9DD', top:3, right:0, flex:0.1}} />
                </TouchableOpacity>
            )
            }}
        />
    )
}

export {ForexList}