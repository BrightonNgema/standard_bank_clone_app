import React from 'react';
import {Text,Image, TouchableOpacity} from 'react-native';

const IconButton = ({onPress,source, name}) => (

    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{paddingHorizontal:25}}>
            <Image source={source} style={{height:30, width:30,alignSelf:'center', marginBottom:10 }} resizeMode="contain"/>
            <Text style={{color:'#fff', textAlign:'center', fontSize:12}}>{name}</Text>
    </TouchableOpacity>
)

export {IconButton}