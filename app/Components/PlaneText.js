import { useFonts } from 'expo-font';
import React,{useContext} from 'react';
import { View , StyleSheet,Text } from 'react-native';
import colors from '../config/colors';
import themeContext from '../config/themecontext';

function PlaneText({children,style,fontSize,fontWeight,...otherprops}) {
    const theme = useContext(themeContext);
    const [loaded] = useFonts({
      Mont: require('../assets/Fonts/DMSans.ttf'),
      
    });
    if (!loaded) {
      return null;
    }
  return (
    <Text {...otherprops} style={[styles.text,style,{fontSize},{fontWeight}]}>{children}</Text>
  );
}
const styles = StyleSheet.create({
    text:{
        fontSize:14,
        //fontFamily:Platform.OS === 'android'? "Roboto": "Avenir",
        fontFamily:'Mont',
        color:colors.graytextcolor,
        fontWeight:'600'
       

    }
})
export default PlaneText;