import React ,{useContext} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';
import themeContext from '../config/themecontext';

import { StatusBar } from 'expo-status-bar';
function SafeScreen({ children, style,style2 }) {
    const theme=useContext(themeContext)
    return (
        <View style={[styles.container, style,{}]}>
             <StatusBar style="dark"   />
            {/* <View style={styles.backcontainer}> */}
            <View style={[styles.container2, style2]}>
        
                {children}
            </View>
            {/* </View> */}
        </View>


    )
}
const styles = StyleSheet.create({
  
    container: {
        
        // paddingTop: Constants.statusBarHeight,
        //paddingBottom:Constants.,
        flex: 1,
       // padding: 20,
        //paddingTop:15,
        //paddingBottom:"20%"
        // borderWidth:1,
        // borderColor:"black"
       // backgroundColor:"yellow",
    },
    // backcontainer:{
    //     paddingTop: Constants.statusBarHeight,
    //     backgroundColor:"yellow",
    //     flex:1
    // },
    container2: {
       //paddingTop: Constants.statusBarHeight,
        //height:"100%",
        flex:1,
        backgroundColor:colors.whitecolor,
        paddingLeft:10,
        paddingRight:10,
        //  borderWidth:1,
        //  borderColor:"black",
       
       //  padding:15,
    }
})
export default SafeScreen;