import React, { useState } from 'react';
import { View , StyleSheet, FlatList } from 'react-native';
import CatalogTab from '../Components/CatalogTab';
import ReButton from '../Components/ReButton';
import ReInput from '../Components/ReInput';
import ReThemeTab from '../Components/ReThemeTab';
import SafeScreen from '../Components/SafeScreen';
import colors from '../config/colors';
import Modal from "react-native-modal";
import ReHeading from '../Components/ReHeading';
import Separator from '../Components/Separator';
import GButton from '../Components/GButton';
import ReText from '../Components/ReText';
import Slider from '@react-native-community/slider';
import navigation from "../navigation/rootNavigation"
const product = [
    {
        id: 1,
        // image: require("../assets/rimages/man.png"),
        title: "NEW ARRIVAL",
        // size: 'S, M, L',
        // limit: '50',
        // box:'green',
        // price: "$198.11",
    },
    {
        id: 2,
       // image: require("../assets/rimages/man.png"),
        title: "RECOMMENDED",
        // size: 'S, M, L',
        // limit: '50',
        // box:'green',
        // price: "$198.11",
    },
    {
        id: 3,
       // image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        // size: 'S, M, L',
        // limit: '50',
        // box:'green',
        // price: "$198.11",
    },
]

function MyCatalog(props) {
    
    const [active, setActive] = useState("readyMade");
    const [gactive, setGActive] = useState("man");

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const all = () => {

        setActive("all")
    };

    const readyMade = () => {
        setActive("readyMade")
    };
    const customMade = () => {
        setActive("customMade")
    };

    
    const man = () => {

        setActive("man")
    };

    const woman = () => {
        setActive("woman")
    };
  return (
    <SafeScreen>
    <View style={styles.container}>
    <View style={styles.searchcontainer}>
                    <ReInput icon='magnify' iconsize={46} placeholder='Search for Products' color='primarycolor' inputcontainer={styles.inputcontainer} />

                </View>
                <View style={styles.tabcontainer}>

                    <ReThemeTab title="All" backgroundColor={active == "all" ? "whitecolor" : "whitecolor"} sbackgroundColor={active == "all" ? "linktextactive" : "whitecolor"} textcolor={active == "all" ? "linktextactive" : "lightgray"} onPress={all} />
                    <ReThemeTab title="Ready Made" backgroundColor={active == "readyMade" ? "whitecolor" : "whitecolor"} sbackgroundColor={active == "readyMade" ? "linktextactive" : "whitecolor"} textcolor={active == "readyMade" ? "linktextactive" : "lightgray"} onPress={readyMade} />
                    <ReThemeTab title="Custom Made" backgroundColor={active == "customMade" ? "whitecolor" : "whitecolor"} sbackgroundColor={active == "customMade" ? "linktextactive" : "whitecolor"} textcolor={active == "customMade" ? "linktextactive" : "lightgray"} onPress={customMade} />
                </View>
                <View style={styles.Lynkscontainer}>
                   {/* <CatalogTab/> */}
                    <FlatList
                        
                        contentContainerStyle={{ alignItems: 'center', }}
                       
                        data={product}
                        keyExtractor={product => product.id.toString()}
                        renderItem={({ item }) =>
                            <CatalogTab
                                // image={item.image}
                                title={item.title}
                                // size={item.size}
                                // limit={item.limit}
                                // price={item.price}
                                // onPress={() => navigation.navigate(Routes.PRODUCTEDETAILS)}
                            />
                        }
                    />

                </View>
                <View style={styles.btncontainer}>
                <ReButton color='linktextactive' iconname='plus' iconcolor='whitecolor' iconsize={55} width={50} height={50} onPress={()=>navigation.navigate('AddNewProduct')}/>
                <ReButton color='linktextactive' iconname='filter-variant' iconcolor='whitecolor' iconsize={55} width={50} height={50} onPress={toggleModal}/>
                </View>
    </View>

    <Modal style={styles.Modal} isVisible={isModalVisible} onBackButtonPress={() => setModalVisible(!isModalVisible)} onBackdropPress={() => setModalVisible(!isModalVisible)}>
                <View style={styles.Modalview}>
                    <View style={[styles.modalinnerview,]}>
                        <View style={styles.tcontainer}>
                            <ReHeading fontSize={20}>Filtre</ReHeading>
                            <View style={styles.crossbtncontainer}>
                                <ReButton style={styles.modalbtn} width='5%' height={30} iconname="close" iconcolor="whitecolor" iconsize={45} onPress={toggleModal} />
                                {/* <ReThemeIcon FAname="close"  iconcolor="text2" size={50} onpress={toggleModal}/> */}
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <Separator width='80%' />

                        </View>
                        <View style={styles.tabview}>
                            <View>
                                <ReHeading fontWeight='500' fontSize={16}>Sort By</ReHeading>
                            </View>
                            <View style={styles.gbuttoncontainer}>
                                <GButton title="Man" backgroundColor={gactive == "man" ? "linktextactive" : "secondarycolor"} textcolor={gactive == "man" ? "whitecolor" : "graytextcolor"} onPress={man} />
                                <GButton title="Woman" backgroundColor={gactive == "woman" ? "linktextactive" : "secondarycolor"} textcolor={gactive == "woman" ? "whitecolor" : "graytextcolor"} onPress={woman} />

                            </View>

                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <Separator width='80%' />

                        </View>

                        <View style={styles.slidecontainer}>
                            <ReHeading fontSize={16} fontWeight='500'>Price</ReHeading>
                            <ReText>$0 - $2000</ReText>
                            <Slider

                                style={{ width: 286, height: 30 }}
                                minimumValue={0}
                                maximumValue={2000}
                                minimumTrackTintColor={colors.linktextactive}
                                maximumTrackTintColor={colors.lightgray}
                                thumbTintColor={colors.linktextactive}
                            />
                        </View>
                        <View style={styles.filterbutton}>
                            <ReButton color='linktextactive' title='Apply Filter' height={50} iconname2='arrow-right' iconcolor2='whitecolor'/>
                        </View>

                    </View>
                </View>
            </Modal>

    </SafeScreen>
  );
}
const styles = StyleSheet.create({
//    container:{
//     flex:1,
//       borderColor:'black',
//      borderWidth:1,
//    },  
   container: {
    flex: 1,
    //  borderColor:'black',
    //  borderWidth:1,
},
searchcontainer: {
    // borderColor: 'black',
    // borderWidth: 1,
},
inputcontainer: {
    height: 51,
    borderColor: colors.bordercolor,
    borderWidth: 1,
    borderRadius: 15,
},
tabcontainer: {
    height: 60,
    alignItems: 'center',
    //justifyContent:'space-evenly',
    flexDirection: 'row',
    // borderColor: 'black',
    // borderWidth: 1,
},
Lynkscontainer: {
    flex: 1,
    
    // borderColor: 'black',
    // borderWidth: 1,
},
btncontainer:{
   position:'absolute',
    //  borderColor: 'black',
    //  borderWidth: 1,
     height:159,
     width:70,
     //left:20,
     bottom:40,
     right:0,
    justifyContent:'space-evenly',
    alignItems:'center',
},
Modal: {
    // marginTop:200
    margin: 0

},
Modalview: {
    flex: 1,
    justifyContent: 'flex-end',
    width: "100%",
    // borderWidth:1,
    // borderColor:'black'

},
modalinnerview: {
    height: '50%',
    padding: 10,
    backgroundColor: colors.whitecolor,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: "100%",
    // borderWidth:1,
    // borderColor:'black',

},
crossbtncontainer: {
    // borderColor:"black",
    // borderWidth:1,
    width: 25,
    height: 25,
    backgroundColor: 'red',
    borderRadius: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
},
tcontainer: {
    //  borderColor:"black",
    //  borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
},
tabview: {

    flex: 0.5,
    // borderColor: "black",
    // borderWidth: 1,

    justifyContent: 'space-evenly'
},
gbuttoncontainer: {
    width: 180,
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
slidecontainer: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    // borderColor: "black",
    // borderWidth: 1,
},
filterbutton:{
    // borderColor: "black",
    // borderWidth: 1,
},
})
export default MyCatalog;