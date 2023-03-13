import React, { useContext, useState } from 'react';
import { TouchableOpacity,StyleSheet,Pressable } from 'react-native';
import ReText from './ReText';
import Checkbox from 'expo-checkbox';

import colors from '../config/colors';
import { back } from 'react-native/Libraries/Animated/Easing';
function pickerItems({lable,onPress}) {
  const [isChecked, setChecked] = useState(false);
   
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
          
            <ReText style={[styles.text]}>{lable}</ReText>
             <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.linktextactive : undefined}
        />
       </TouchableOpacity>
//     <Pressable onPress={onPress}
//   style={({ pressed }) => [{ color: pressed ? colors.primarycolor : theme.text2 }, styles.container ]}>
//   {({ pressed }) => (
//     <ReText style={[{ color: pressed ? colors.primarycolor : theme.text2 }, styles.text]}>
//       {lable}
//     </ReText>
//   )}
// </Pressable>

  );
}
const styles = StyleSheet.create({
    container:{
      paddingRight:10,
      justifyContent:'space-between',
      alignItems:'center',
        flexDirection:'row',
    
    },
    text:{
        padding:10,
        marginVertical:10,
    },
    image:{
        height:50,
        width:30,
        alignSelf:'center',
        overflow:'hidden'
    },
    checkbox: {
      height:16,
      width:16,
      borderRadius:3,
    },

})
export default pickerItems;