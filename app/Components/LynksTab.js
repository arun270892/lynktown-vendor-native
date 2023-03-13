import React, { useState } from 'react';
import { View , StyleSheet, Image } from 'react-native';
import PlaneText from './PlaneText';
import ReText from './ReText';
import Checkbox from 'expo-checkbox';
import colors from '../config/colors';
function LynksTab({title,size,limit,image,price,box,borderColor,borderWidth}) {
    const [isChecked, setChecked] = useState(false);
  return (
    
    <View style={styles.maincontainer}>
        <View style={[styles.container,{borderColor},{borderWidth}]}>
        <View style={styles.imagecontainer}>
            <Image style={styles.image} source={image}/>
        </View>
        <View style={styles.detailcontainer}>
            <PlaneText fontSize={10} fontWeight='bold'>{title}</PlaneText>
            <ReText fontSize={9} >Size: {size}</ReText>
            <ReText fontSize={9} >Available Stock: {limit}</ReText>
                <View style={styles.pricecontainer}>
                <PlaneText fontSize={11} fontWeight='bold'>{price}</PlaneText>
               {box && <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? box : undefined}
        />}
                </View>
        </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
   maincontainer:{
    height:171,
    width:125,
    justifyContent:'center',
    alignItems:'center',
    // borderColor:'black',
    // borderWidth:1,
   },
   container:{
    height:161,
    width:117,
    alignItems:'center',
    padding:5,
    borderRadius:10,
    backgroundColor:colors.lynksbgcolor,
    // borderColor:'black',
    // borderWidth:1,
},
imagecontainer:{
    height:70,
    width:105,
    borderRadius:10,

    // borderColor:'black',
    // borderWidth:1,

},
image:{
    height:'100%',
    width:'100%',
    resizeMode:'stretch',
    
},
detailcontainer:{
    justifyContent:'space-evenly',
    height:80,
    width:105,
    // borderColor:'black',
    // borderWidth:1,
},
pricecontainer:{
    height:20,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    // borderColor:'black',
    // borderWidth:1,
},
checkbox: {
    height:16,
    width:16,
    borderRadius:50,
  },
   
})
export default LynksTab;