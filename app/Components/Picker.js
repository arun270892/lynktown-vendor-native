import React, { useState ,useContext} from 'react';

import { View, StyleSheet, TouchableWithoutFeedback, FlatList, Pressable,} from 'react-native';
import ReButton from './ReButton';
import ReText from './ReText';
import colors from '../config/colors';
import ReIcon from './ReIcon';
import Modal from "react-native-modal";
import ReInput from './ReInput';
import PickerItems from './PickerItems'

function Picker({ iconname, items, iconcolor, placeholder, onSelectItem, selectedItem,  style }) {
    
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const tcolor = colors.primarycolor;
  return (
    <>
    <TouchableWithoutFeedback  onPress={toggleModal} >
       <View style={[styles.container, style]}>
           {iconname && <ReIcon style={styles.icon} name={iconname} iconcolor={iconcolor} />}

          
           <ReText style={styles.text}>{selectedItem ? selectedItem.lable : placeholder}</ReText>
           <ReIcon name="chevron-down" iconcolor="primarycolor" />
       </View>
   </TouchableWithoutFeedback>

   <Modal  style={styles.Modal} isVisible={isModalVisible} onBackButtonPress={()=>setModalVisible(!isModalVisible)} onBackdropPress={()=>setModalVisible(!isModalVisible)}>
   <View style={styles.Modalview}>
           <View style={[styles.modalinnerview]}>

             
               <View style={styles.crossbtncontainer}>
               <ReButton style={styles.modalbtn} width={20} height={20} iconname="close" iconcolor="text2" iconsize={45} onPress={toggleModal} />
               {/* <ReIcon name="close"  iconcolor="text2" size={50} onpress={toggleModal}/> */}
               </View>
               <FlatList
                   data={items}
                   keyExtractor={item => item.value.toString()}
                   renderItem={({ item }) =>
                       <PickerItems
                         
                           lable={item.lable}
                           onPress={() => {
                            
                               setModalVisible(toggleModal);
                                 onSelectItem(item);
                                
                           }}
                       />} />
           </View>
       </View>
</Modal>
</>
  );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.whitecolor,
        marginVertical: "3%",
        borderRadius: 30,
       // width: "100%",
        height: 55,
        borderWidth:1,
        borderColor:colors.lightgray
    },
    text: {
        alignSelf: "center",
        flex: 1,
        color:colors.lightgray,
        marginLeft: 20,
        fontSize:22
    },
    Modal: {
        // marginTop:200
        margin:0
       
    },
    Modalview: {
        flex: 1,
        justifyContent: 'flex-end',
        width:"100%",
       
    },
    modalinnerview:{
        
        padding: 10,
        backgroundColor: colors.whitecolor,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        width:"100%",
        
    },
    image: {
        height: 32,
        width: 20,
        alignSelf: 'center',
        marginLeft: 20

    },
    modalbtn: {
        //alignSelf:'flex-end',
       // padding: 20,
        // borderColor:"white",
        // borderWidth:1,
    

    },
    crossbtncontainer:{
        // borderColor:"white",
        // borderWidth:1,
        alignItems:'flex-end',
        padding: 10,
    },
    icon: {
        marginLeft: 20,
        borderColor:"white",
        borderWidth:1,
    }


})
export default Picker;