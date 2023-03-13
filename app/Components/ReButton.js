import React ,{useContext}from 'react';
import { StyleSheet,TouchableOpacity,Image,View} from 'react-native';
import colors from '../config/colors';
import ReIcon from './ReIcon';
import ReText from './ReText';
import themeContext from '../config/themecontext';
import ReThemeIcon from './ReThemeIcon';
import ReHeading from './ReHeading';
import PlaneText from './PlaneText';


function ReButton({disabled,title,textsize=16,themeiconname,iconname,iconname2 ,iconcolor,iconcolor2,iconsize, color,onPress, height=50,width="100%",btnstyle,btntextstyle,iconviewstyle,loading}) {
  //const { colors } = useTheme();
  const theme=useContext(themeContext)
  return (
    
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.button,btnstyle,{width},{height},{backgroundColor:colors[color]}]}>
    {iconname && <ReIcon  name={iconname} iconcolor={iconcolor} size={iconsize} />} 
    {themeiconname && <ReThemeIcon  name={themeiconname} iconcolor={iconcolor} size={iconsize} />} 
   
 {(title && !loading) && <PlaneText fontSize={textsize} fontWeight='400' style={[styles.buttontext,btntextstyle]}>{title} </PlaneText>}
 
 {iconname2 && <View style={[styles.iconview,iconviewstyle]}><ReIcon  name={iconname2} iconcolor={iconcolor2} size={iconsize} /></View>}
 {/* {loading && <Image style={styles.image} source={require("../assets/gif/loading.gif")}/>}  */}
</TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    button:{
    
        flexDirection:'row',
        borderRadius:25,
      //padding:10,
         alignItems:'center',
         justifyContent:'center',
       // marginTop:10,
       
        backgroundColor:colors.primarycolor,
        // borderWidth:1,
        // borderColor:"black",
     
        
       
      
    },
    buttontext:{
       
        fontSize:16, 
        color:colors.secondarycolor,
        fontWeight:'700'
        // borderWidth:1,
        // borderColor:"black",
    },
    iconview:{
      // borderWidth:1,
      // borderColor:'white',
      
      // justifyContent:'flex-end',

    },
    image:{
        height:40,
        width:40,
    },
})
export default ReButton;