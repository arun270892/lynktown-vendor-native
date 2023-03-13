import React , { useContext,useState } from 'react';
import { View , StyleSheet, TouchableOpacity,Text } from 'react-native';
import colors from '../config/colors';
import PlaneText from './PlaneText';


function GButton({backgroundColor,textcolor,onPress,title}) {
  return (

    <TouchableOpacity style={[styles.btnconatiner,{backgroundColor:colors[backgroundColor]}]} onPress={onPress} >
                        <PlaneText fontSize={14} style={[styles.btntext,{color:colors[textcolor]}]}>{title}</PlaneText>
                    </TouchableOpacity>

  );
}
const styles = StyleSheet.create({
    btntext:{
        fontSize:11,
        fontWeight:'bold',
    
       },
       btnconatiner:{
        borderWidth:1,
        borderColor:colors.lightgray,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        width:80,
        borderRadius:7,
       },
})
export default GButton;