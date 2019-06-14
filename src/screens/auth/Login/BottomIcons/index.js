import React from 'react'
import { IconButton } from './IconButton';
import { View } from 'react-native';
import {icons} from 'assets'

const {contact, graph, wallet} = icons

const BottomIcons = ({onNav}) => {
  return (
    <View style={{width:'100%', flexDirection: 'row', height:100, position:'absolute', bottom:30, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.3)'}} >
        <IconButton name={'Balances'} onPress={() => onNav('BalancePeek')} source={wallet} />
        <IconButton name={'Forex'} onPress={() => onNav('Forex')} source={graph} />
        <IconButton name={'Contacts'} onPress={() => onNav('Contact')} source={contact} />
    </View>
  )
}
export { BottomIcons }
