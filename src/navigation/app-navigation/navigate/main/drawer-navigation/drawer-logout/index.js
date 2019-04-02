import React , {Component} from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { icons } from 'assets';
import { connect } from 'react-redux';
import {actions} from 'redux-actions';

class Logout extends Component{
    constructor(props){
        super(props);

    }
    render(){
        
        return (
            <View style={{borderTopWidth:StyleSheet.hairlineWidth}}>
                 <TouchableOpacity onPress={() => this.props.logout()} style={{flexDirection:'row',flex:1,marginTop:10}}>
                <Image source={icons.logout2}
                    resizeMode="contain"
                    style={{width:30, marginLeft:20}} 
                />
                <Text style={{fontWeight:'bold', color:'#000', marginLeft:15, marginTop:15}}>Logout</Text>
          </TouchableOpacity>
            </View>
           
        )
    }
}

const {logout} = actions
export default connect(undefined, {logout})(Logout);