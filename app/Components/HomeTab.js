import React from 'react';
import { View , StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PlaneText from './PlaneText';
import colors from '../config/colors';
import ReButton from './ReButton';
function HomeTab({title,subtitle,icon,onPress}) {
  return (
    <View style={styles.maincontainer}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={45} color="#BFB8AD" />
        <View style={styles.textcontainer}>
            <PlaneText style={{color:colors.whitecolor}} fontSize={22} fontWeight='bold'>{title}</PlaneText>
            <PlaneText style={{color:colors.whitecolor}} fontSize={12} fontWeight='bold'>{subtitle}</PlaneText>
        </View>
        <ReButton disabled={true} width={30} height={30} iconname='arrow-right' color='whitecolor'/>
        </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
    maincontainer:{
        height:140,
        justifyContent:'center',
        // borderColor:'black',
        // borderWidth:1,
    },
   container:{
    height:120,
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    borderRadius:20,
    backgroundColor:colors.linktextactive,
    // borderColor:'black',
    // borderWidth:1,  
   },
   textcontainer:{
    width:230,
    // borderColor:'white',
    // borderWidth:1,  
   },
})
export default HomeTab;