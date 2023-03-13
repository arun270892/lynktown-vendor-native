import React from 'react';
import { View, StyleSheet } from 'react-native';
import SafeScreen from '../Components/SafeScreen';
import Constants from 'expo-constants';
import ReHeading from '../Components/ReHeading';
import { ScrollView } from 'react-native';
import ReButton from '../Components/ReButton';
import colors from '../config/colors';
import HomeTab from '../Components/HomeTab';
function HomeScreen({navigation}) {
    return (
        <SafeScreen style2={styles.safescreen}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>

                    <View style={{height:50}}>
                        <ReHeading fontSize={22}>Bussiness Name</ReHeading>
                    </View>
                    <View style={styles.shadowcontainer}>
                        <View style={styles.innercontainer}>
                            <View style={styles.rowcontainer}>
                                <View style={styles.firstcontainer}>
                                    <ReHeading fontSize={14} fontWeight='500'>Products in Catalog</ReHeading>
                                    <ReHeading fontSize={18} fontWeight='500'>0 </ReHeading>

                                </View>
                                <View style={styles.secondcontainer}>
                                    <ReHeading fontSize={14} fontWeight='500'>Total Orders</ReHeading>
                                    <ReHeading fontSize={18} fontWeight='500'>0</ReHeading>

                                </View>
                            </View>
                            <View style={styles.rowcontainer}>
                                <View style={styles.firstcontainer}>
                                    <ReHeading fontSize={14} fontWeight='500'>Total Earnings</ReHeading>
                                    <ReHeading fontSize={18} fontWeight='500'>0</ReHeading>

                                </View>
                                <View  style={styles.secondcontainer}>
                                    <ReHeading fontSize={14} fontWeight='500'>Statistics</ReHeading>
                                   <ReButton iconname='arrow-right' width={24} color='linktextactive' iconsize={30} height={24} iconcolor='whitecolor'/>

                                </View>

                            </View>
                            <View style={styles.inputbtncontainer}>
                                <View style={styles.input}>
                                    <ReHeading fontSize={14} fontWeight='500'>lynktown.com/business name</ReHeading>
                                </View>
                                <ReButton iconname='content-copy' width={35} color='linktextactive' iconsize={35} height={35} iconcolor='whitecolor'/>
                                <ReButton iconname='share-variant' width={35} color='linktextactive' iconsize={35} height={35} iconcolor='whitecolor'/>
                                
                            </View>

                        </View>
                    </View>


                    <HomeTab icon='account-cash' title='Create lynk' subtitle='To share around and get orders' />
                    <HomeTab icon='clipboard-list' title='My Catalog' subtitle='Create your catalog for social media' onPress={()=>navigation.navigate('Catalog')} />
                    <HomeTab icon='clipboard-list' title='Order requests (1)' subtitle='Incoming order requests will appear here' />
                    <HomeTab icon='link-variant' title='Lynks' subtitle='Find all Lynks created by you' />
                    <HomeTab icon='table-large' title='Orders' subtitle='Find all Lynks created by you' />
                </View>
            </ScrollView>
        </SafeScreen>
    );
}
const styles = StyleSheet.create({
    safescreen: {
        // paddingTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    shadowcontainer:{
       
        height:230,
        borderRadius:10,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    innercontainer:{
        elevation:10,
        backgroundColor:colors.whitecolor,
        borderRadius:10,
        justifyContent:'space-evenly',
        height:220,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    rowcontainer:{
        
        // borderWidth: 1,
        // borderColor: 'black',
        height:60,
        flexDirection:'row',
    },
    firstcontainer:{
        justifyContent:'center',
        paddingLeft:20,
        width:'55%',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    secondcontainer:{
        justifyContent:'center',
       // paddingLeft:20,
       // width:'55%',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    inputbtncontainer:{
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    input:{
        width:250,
        justifyContent:'center',
        alignItems:'center',
        height:30,
        backgroundColor:colors.lightgraybackground
    },
})
export default HomeScreen;