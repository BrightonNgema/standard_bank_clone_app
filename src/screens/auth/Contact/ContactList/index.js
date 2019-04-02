import React from 'react'
import { View, Text,FlatList} from 'react-native';


import { dummydata } from 'utils';


const ContactList = ({data}) => {
  return (
    <FlatList
            data={dummydata.contactdata}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
                return (
                   <View style={{marginHorizontal:10, marginTop:10}}>
                       <Text style={{fontSize:18, margin:10,marginVertical:15,fontWeight:'100'}}>{item.title}</Text>
                       <View style={{borderTopWidth:0.5, borderColor:'#ccc'}}/>
                        {item.contacts.map((data) => {
                            return(
                                <View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:10, marginVertical:7}}>
                                    <Text style={{fontSize:14,fontWeight:'100',marginTop:5, flex:0.7}}>{data.name}</Text>
                                    <Text style={{fontSize:14, color:'#00A9DD', marginTop:5,}} >{data.number}</Text>
                                </View>
                            )
                        })}    
                   </View>
                )
            }}
        />
  )
}

export {ContactList}