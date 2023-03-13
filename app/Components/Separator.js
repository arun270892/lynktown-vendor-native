import React from 'react';
import { View , StyleSheet } from 'react-native';
import colors from '../config/colors';


function Separator({width="80%",bkcolor=colors.inputborderline,style}) {
  return (
    <View style={[styles.container ,style,{width},{backgroundColor:colors[bkcolor]}]}></View>
  );
}
const styles = StyleSheet.create({
   container:{
    height:1,
    width:"80%",
    backgroundColor:colors.inputborderline,
   },
})
export default Separator;