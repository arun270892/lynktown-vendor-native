import { useFonts } from 'expo-font';
import React,{useContext} from 'react';
import { View , StyleSheet,Text } from 'react-native';
import ReText from './ReText';
import colors from '../config/colors';

import PlaneText from './PlaneText';
function ReHeading({children,style,fontSize=14,fontWeight='bold',...otherprops}) {
  
  // const [loaded] = useFonts({
  //   Mont: require('../assets/Fonts/Ubuntu-Regular.ttf'),
    
  // });
  // if (!loaded) {
  //   return null;
  // }
 
  return (
    <PlaneText {...otherprops} fontSize={fontSize} fontWeight={fontWeight} style={[styles.text,style,{color:colors.primarycolor}]}>{children}</PlaneText>
  );
}
const styles = StyleSheet.create({
   text:{
    fontSize:25,
        //fontFamily:Platform.OS === 'android'? "Roboto": "Avenir",
        //fontFamily:'Mont',
        color:colors.primarycolor,
        fontWeight:'700'
   },
})
export default ReHeading;