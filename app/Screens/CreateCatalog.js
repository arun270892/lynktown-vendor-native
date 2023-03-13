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

const products = [
  {
    id: 1,
    image: require("../assets/rimages/women.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
  {
    id: 2,
    image: require("../assets/rimages/man.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
  {
    id: 3,
    image: require("../assets/rimages/women.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
  {
    id: 4,
    image: require("../assets/rimages/man.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
  {
    id: 5,
    image: require("../assets/rimages/women.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
  {
    id: 6,
    image: require("../assets/rimages/man.png"),
    title: "blue jeans jacket",
    size: 'S, M, L',
    limit: '50',
    box: 'green',
    price: "$198.11",
  },
]

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

function CreateCatalog(props) {
  const [category, setcategory] = useState();
  return (
    <SafeScreen style2={styles.safescreen}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.textcontainer}>
            <ReHeading fontWeight='500'>Please fill the details below to create catalog</ReHeading>
            <ReHeading fontSize={18} fontWeight='400'>Product details</ReHeading>
          </View>
          <View style={styles.slidecontainer}>
            <View style={styles.innerslidecontainer}>
              <FlatList
                contentContainerStyle={{ justifyContent: 'center', }}
              showsHorizontalScrollIndicator={false}
                data={products}
                horizontal
                keyExtractor={products => products.id.toString()}
                renderItem={({ item }) =>
                  <LynksTab
                    image={item.image}
                    title={item.title}
                    size={item.size}
                    limit={item.limit}
                    box={item.box}
                    price={item.price}
                    borderColor={colors.linktextactive}
                    borderWidth={1}
                  //   onPress={() => navigation.navigate(Routes.PRODUCTEDETAILS)}
                  />
                }
              />

            </View>
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
                <TextInput placeholder='Search for Products' style={styles.inputcontainer} />
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
          <View style={styles.buttoncontainer}>
            <ReButton color='linktextactive' width='100%' title='Publish' iconname2='arrow-right' iconcolor2='whitecolor'/>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}
const styles = StyleSheet.create({
  safescreen: {

    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    flex: 1,
  },
  textcontainer: {
    justifyContent: 'space-evenly',
    height: 65,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  slidecontainer: {
    justifyContent: 'center',
    height: 200,
    // borderWidth: 1,
    // borderColor: 'black'
  },
  innerslidecontainer: {
    height: 170,
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
   borderRadius:20,
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
  inputcontainer: {
    height: 40,
    paddingLeft: 10,
    borderColor: colors.lightgray,
    borderWidth: 1,
    borderRadius: 15,
  },
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoncontainer:{
    height:100,
    justifyContent:'center',
    alignItems:'center',
  },


})
export default CreateCatalog;