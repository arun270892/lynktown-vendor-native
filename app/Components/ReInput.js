import React ,{useContext}from 'react';
import { View,StyleSheet,TextInput} from 'react-native';
import ReIcon from './ReIcon';
import colors from '../config/colors';
import themeContext from '../config/themecontext';
function ReInput({icon,color,icon2,color2,iconsize,inputstyle,inputcontainer,...otherprops}) {
    const theme =useContext(themeContext);
  return (
    <View style={[styles.container,inputcontainer]}>   
        
       {icon&& <ReIcon style={styles.icon} name={icon} iconcolor={color} size={iconsize} />}
            <TextInput placeholderTextColor="#AAAAAA"  style={[styles.input,inputstyle,{color:theme.inputtextcolor}]}  {...otherprops}/>
           {icon2 && <ReIcon style={styles.icon} name={icon2} iconcolor={color2}/>}
        </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
       // backgroundColor:colors.inputcolor,
        marginVertical:10,
        borderRadius:2,
        width:"100%",
        height:50,  
      },
    input:{
    
      marginLeft:20,
    //  borderWidth:1,
    //  borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        //fontFamily:Platform.OS === 'android'? "Roboto": "Avenir",
        //color:colors.blackcolor,
        fontSize:17,
        fontWeight:"500",
        width:"80%",
        
        
      },
      icon:{
        marginLeft:20,
      
      }
})
export default ReInput;