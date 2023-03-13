import React, { useState } from 'react';
import { Switch } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { View, StyleSheet } from 'react-native';
import LynksTab from '../Components/LynksTab';
import Picker from '../Components/Picker';
import ReButton from '../Components/ReButton';
import ReHeading from '../Components/ReHeading';
import ReInput from '../Components/ReInput';
import SafeScreen from '../Components/SafeScreen';
import Separator from '../Components/Separator';
import colors from '../config/colors';
import Checkbox from 'expo-checkbox';
import ReIcon from '../Components/ReIcon';

const categories = [
    {
        lable: "Men Ware",
        value: 1
    },
    {

        lable: "Women Ware",
        value: 2
    },
    {

        lable: "Child Ware",
        value: 3
    },
];

function AddNewProduct(props) {
    const [isChecked, setChecked] = useState(false);
    const [category, setcategory] = useState();
    return (
        <SafeScreen>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>

                    <View style={styles.textcontainer}>
                        <ReHeading fontWeight='500'>Please fill the details below to create catalog</ReHeading>
                        <ReHeading fontSize={18} fontWeight='400'>Product details</ReHeading>
                    </View>
                    <View style={styles.outstcontainer}>
                        <View style={styles.astcontainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <ReIcon name='tape-measure' iconcolor='linktextactive' size={60} />
                                <View >

                                    <ReHeading fontSize={16}>Customise Product</ReHeading>
                                    <ReHeading fontSize={12} fontWeight='500'>Select if product is customise</ReHeading>
                                </View>
                            </View>

                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? colors.linktextactive : undefined}
                            />
                        </View>
                    </View>

                    <View style={styles.createcontainer1} >
                        <ReInput placeholder='Enter Product Name' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                        <ReButton color='linktextactive' textsize={14} title='Add New Session' width={170} />
                        <ReInput icon='cash' color='lightgray' iconsize={50} placeholder='Enter Price' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                        <ReInput icon='cash' color='lightgray' iconsize={50} placeholder='Enter Discount Price' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                        {/* <ReHeading>2023 New Arrival</ReHeading>
                <TextInput placeholder='Search for Products' style={styles.inputcontainer} />
                <View style={styles.btn}>
                  <ReButton color='linktextactive' textsize={14} title='Add New Session' width={170} />
                </View> */}
                        <View style={styles.sizetextcontainer}>
                            <ReHeading fontSize={14} fontWeight='500'>Select available sizes</ReHeading>
                            <View style={styles.sizecontainer}>
                                <View style={styles.sbtn}>
                                    <ReHeading fontSize={16} fontWeight='500'>S</ReHeading>
                                </View>

                                <View style={styles.sbtn}>
                                    <ReHeading fontSize={16} fontWeight='500'>M</ReHeading>
                                </View>
                                <View style={styles.sbtn}>
                                    <ReHeading fontSize={16} fontWeight='500'>L</ReHeading>
                                </View>
                                <View style={styles.sbtn}>
                                    <ReHeading fontSize={16} fontWeight='500'>XL</ReHeading>
                                </View>


                            </View>
                        </View>
                        <ReInput icon='cash' color='lightgray' iconsize={50} placeholder='Available Stock' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                    </View>


                    <View style={styles.detailcontainer}>
                        <View style={styles.innerdetailcontainer}>
                            <View style={styles.tcontainer}>
                                <ReHeading fontSize={16}>Assign products to sections & category </ReHeading>
                                <ReHeading fontSize={12} fontWeight='500'>to improve shopping experience</ReHeading>

                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <Separator width='90%' bkcolor='lightgray' />
                            </View>
                            <View style={styles.tcontainer}>
                                <ReHeading fontSize={16}>Add Section </ReHeading>
                                <ReHeading fontSize={12} fontWeight='500'>section make it easier for your customers to browse trending products in catalog</ReHeading>

                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <Separator width='90%' bkcolor='lightgray' />
                            </View>
                            <View style={styles.tcontainer}>
                                <ReHeading fontSize={16}>New arrivals section</ReHeading>
                                <ReHeading fontSize={12} fontWeight='500'>By default new Lynks will be added into New Arrivals and last for 7 days</ReHeading>

                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <Separator width='90%' bkcolor='lightgray' />
                            </View>

                            <View style={styles.stcontainer}>
                                <View>
                                    <ReHeading fontSize={16}>Add to recommended section</ReHeading>
                                    <ReHeading fontSize={12} fontWeight='500'>Highlight your best products</ReHeading>
                                </View>
                                <Switch />
                            </View>

                            <View style={styles.stcontainer}>
                                {/* <View>
                  <ReHeading fontSize={16}>Add to recommended section</ReHeading>
                  <ReHeading fontSize={12} fontWeight='500'>Highlight your best products</ReHeading>
                  </View> */}
                                <ReButton color='linktextactive' textsize={14} title='Add New Session' width={170} />
                                <ReButton textsize={14} btntextstyle={styles.btntextstyle} title='View example' width={170} />

                            </View>
                            <View style={styles.createcontainer} >
                                <ReHeading>2023 New Arrival</ReHeading>
                                <ReInput icon='cash' color='lightgray' iconsize={50} placeholder='2023 New Arrival' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                                <View style={styles.btn}>
                                    <ReButton color='linktextactive' textsize={14} title='Add New Session' width={170} />
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, }}>
                                <Separator width='90%' bkcolor='lightgray' />
                            </View>


                            <View style={styles.createcontainer} >
                                <ReHeading>Select Category</ReHeading>
                                <Picker

                                    selectedItem={category}
                                    onSelectItem={item => setcategory(item)}
                                    items={categories} placeholder="Select" />


                            </View>




                        </View>


                    </View>

                    <View style={styles.outstcontainer1}>
                        <View style={styles.astcontainer2}>
                            <View style={{ flexDirection: 'row' }}>
                               
                                <View >

                                    <ReHeading fontSize={16}>Add item weight</ReHeading>
                                    <ReHeading fontSize={12} fontWeight='500'>to help with shipping & Logistics</ReHeading>
                                </View>
                            </View>
                            
                            <ReInput icon='weight-kilogram' color='lightgray' iconsize={50} placeholder='Enter weight' inputcontainer={styles.inputcontainer} inputstyle={styles.inputstyle} />
                          
                        </View>
                    </View>

                    <View style={styles.buttoncontainer}>
            <ReButton color='linktextactive' width='100%' title='Save' iconname2='arrow-right' iconcolor2='whitecolor'/>
          </View>


                </View>
            </ScrollView>
        </SafeScreen>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textcontainer: {
        justifyContent: 'space-evenly',
        height: 65,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    astcontainer: {
        borderRadius: 20,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.tabbk,
        // paddingLeft:7,
        paddingRight: 15,
        //   borderWidth: 1,
        //  borderColor: 'black'

    },
    outstcontainer: {
        height: 120,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    createcontainer1: {
        justifyContent: 'space-evenly',
        height: 450,
        borderRadius: 20,
        padding: 20,

        backgroundColor: colors.tabbk
    },
    inputcontainer: {
        height: 50,
        // paddingLeft: 10,
        borderColor: colors.lightgray,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    inputstyle: {
        fontSize: 14,
    },
    sizetextcontainer: {
        justifyContent: 'space-evenly',
        height: 70,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    sizecontainer: {

        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: 'black'
    },
    sbtn: {
        borderRadius: 50,
        marginRight: 20,
        borderColor: colors.lightgray,
        backgroundColor: colors.lightgraybackground,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 31,
        width: 38,
    },

    detailcontainer: {
        // height:1000,

        // borderWidth: 1,
        // borderColor: 'black'
    },
    innerdetailcontainer: {
        // height:950,
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: "#EEECE7",
        // borderWidth: 1,
        // borderColor: 'black'
    },
    tcontainer: {
        height: 90,
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black'
    },
    stcontainer: {
        flexDirection: 'row',
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btntextstyle: {
        color: colors.graytextcolor
    },
    createcontainer: {
        justifyContent: 'space-evenly',
        height: 200,
        borderRadius: 20,
        padding: 20,

        backgroundColor: colors.whitecolor
    },
    // inputcontainer: {
    //     height: 40,
    //     paddingLeft: 10,
    //     borderColor: colors.lightgray,
    //     borderWidth: 1,
    //     borderRadius: 15,
    // },
    btn: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    astcontainer2: {
        borderRadius: 20,
       
        height: 150,
        justifyContent: 'space-evenly',
       
        backgroundColor: colors.tabbk,
        padding:20,
        //   borderWidth: 1,
        //  borderColor: 'black'

    },
    outstcontainer1: {
        height: 170,
        justifyContent: 'center',
        // alignItems: 'center',
    },

    buttoncontainer:{
        height:100,
        justifyContent:'center',
        alignItems:'center',
      },
})
export default AddNewProduct;