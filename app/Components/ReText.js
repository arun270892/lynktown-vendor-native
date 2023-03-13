import { useFonts } from 'expo-font';
import React,{useContext} from 'react';
import { View , StyleSheet,Text } from 'react-native';
import colors from '../config/colors';
import themeContext from '../config/themecontext';
import PlaneText from './PlaneText';

function ReText({children,style,fontSize,...otherprops}) {
  const theme = useContext(themeContext);
 
  return (
    <PlaneText {...otherprops} fontSize={fontSize} style={[styles.text,style,]}>{children}</PlaneText>
  );
}
const styles = StyleSheet.create({
    
 
    text:{
        fontSize:14,
        //fontFamily:Platform.OS === 'android'? "Roboto": "Avenir",
        // fontFamily:'Mont',
        color:colors.graytextcolor,
        fontWeight:'600'
       

    }
   
})
export default ReText;