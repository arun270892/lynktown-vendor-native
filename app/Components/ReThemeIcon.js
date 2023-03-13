import React ,{useContext} from 'react';
import { View,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import themeContext from '../config/themecontext';
import colors from '../config/colors';
function ReThemeIcon({
    style,
    name,
    size = 40,
    iconcolor ,
    backgroundcolor, 
    color,
}) {
    const theme=useContext(themeContext)
  return (
    <View style={{ borderRadius:size/2,
    width:size,
    backgroundColor:backgroundcolor,
    justifyContent:'center',
    alignItems:'center',
   
   
    }}>
        <MaterialCommunityIcons style={[styles.icon,style,{backgroundColor:colors[color]},{color:theme[iconcolor]}]} name={name} size={size * 0.5}  />
    </View>
  );
}
const styles = StyleSheet.create({
   container:{
   },
})
export default ReThemeIcon;