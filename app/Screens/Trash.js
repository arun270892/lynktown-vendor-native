import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LynksTab from '../Components/LynksTab';
import ReButton from '../Components/ReButton';
import ReInput from '../Components/ReInput';
import ReText from '../Components/ReText';
import ReThemeTab from '../Components/ReThemeTab';
import SafeScreen from '../Components/SafeScreen';
import colors from '../config/colors';

const products = [
    {
        id: 1,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 2,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 3,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 4,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 5,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 6,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 7,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 8,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
    {
        id: 9,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        box:'green',
        price: "$198.11",
    },
]
function Trash(props) {
    const [active, setActive] = useState("readyMade");

    const all = () => {

        setActive("all")
    };

    const readyMade = () => {
        setActive("readyMade")
    };
    const customMade = () => {
        setActive("customMade")
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
                <View style={styles.titlecontainer}>
            <ReText style={styles.text} fontSize={14}>SELECT FOR RESTORE</ReText>
          
           
        </View>
                <View style={styles.Lynkscontainer}>
                    {/* <LynksTab/> */}
                    <FlatList
                        contentContainerStyle={{ alignItems: 'center', }}
                        numColumns={3}
                        data={products}
                        keyExtractor={products => products.id.toString()}
                        renderItem={({ item }) =>
                            <LynksTab
                                image={item.image}
                                title={item.title}
                                size={item.size}
                                limit={item.limit}
                                box={item.box}
                                price={item.price}
                             //   onPress={() => navigation.navigate(Routes.PRODUCTEDETAILS)}
                            />
                        }
                    />

                </View>
                <View style={styles.btncontainer}>
                    
                    <ReButton color='linktextactive' title='Restore' iconname2='backup-restore' iconcolor2='whitecolor' width='95%' height={48}/>
                 
                </View>
            </View>
        </SafeScreen>

  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderColor:'black',
        // borderWidth:1,
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
    titlecontainer:{
       
        
        justifyContent:'center',
        // borderWidth:1,
        // borderColor:'black',
        height:40,
    },
    Lynkscontainer: {
        flex: 1,
        // borderColor: 'black',
        // borderWidth: 1,
    },
    btncontainer:{
       height:70,
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:1,
        // bordercolor:'black'
    },

})
export default Trash;