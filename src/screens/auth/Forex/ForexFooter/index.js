import React from 'react';
import { View, Text} from 'react-native';

const ForexFooter = () => (
<View style={{backgroundColor:'#eee', width:'100%', height:60, position:'absolute', bottom:0, alignItems: 'center',}}>
    <Text style={{fontWeight:'100', fontSize:10, marginVertical:5}}>Indicative rates only - 2019-04-01</Text>
    <Text style={{fontWeight:'100',fontSize:10}}>Last update - 21:29:39</Text>
</View>
)

export { ForexFooter }