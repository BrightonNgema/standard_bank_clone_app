import React from 'react';
import { View, Text} from 'react-native';

const ForexHeader = () => (
    <View style={{marginTop:10,marginHorizontal:10}}>
        <Text style={{textAlign:'right', color:'#222', fontWeight: '100'}}>
            Rand per unit
        </Text>
    </View>
)

export { ForexHeader }