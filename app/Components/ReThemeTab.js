import React , { useContext,useState } from 'react';
import { View , StyleSheet, TouchableOpacity,Text } from 'react-native';
import colors from '../config/colors';
import themeContext from '../config/themecontext';
import PlaneText from './PlaneText';
import ReHeading from './ReHeading';
import Separator from './Separator';
function ReThemeTab({backgroundColor,textcolor,sbackgroundColor,onPress,title}) {
    const theme = useContext(themeContext);
  return (
   // {color:theme[iconcolor]}
   <>
    <TouchableOpacity style={[styles.btnconatiner,{backgroundColor:colors[backgroundColor]}]} onPress={onPress} >
                        <PlaneText fontSize={14} style={[styles.btntext,{color:colors[textcolor]}]}>{title}</PlaneText>
                       <View style={[styles.sep,{backgroundColor:colors[sbackgroundColor]}]}></View>
                    </TouchableOpacity>
                 
                    </>
  );

}
const styles = StyleSheet.create({
    btntext:{
        fontSize:11,
        fontWeight:'bold',
    
       },
       btnconatiner:{
      
        height:30,
        justifyContent:'space-between',
        alignItems:'center',
        width:"30%",
        borderRadius:7,
       },
       sep:{
        // borderWidth:1,
        // borderColor:'black',
        height:2,
        width:45,
       },

})
export default ReThemeTab;