import React from 'react';
import { View , StyleSheet, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../config/colors';
import HomeScreen from '../Screens/HomeScreen';
import ReButton from '../Components/ReButton';
import Catalog from '../Screens/Catalog';
import CreateCatalog from '../Screens/CreateCatalog';
import AddNewProduct from '../Screens/AddNewProduct';
// import Home from '../Screens/Home';
// import Products from '../Screens/Products';
// import BackButton from '../Components/BackButton';
// import ProductDetails from '../Screens/ProductDetails';
// import ReThemeButton from '../Components/ReThemeButton';
// import Reviews from '../Screens/Reviews';
const Stack = createStackNavigator();

const HomeNavigator = () => (

  <Stack.Navigator screenOptions={{
    //headerTransparent: true,
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 20},
    headerTintColor: colors.linktextactive,
    initialRouteName:"Home", 
   
    

  }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:"LINKTOWN",
    headerRight: () => <View style={{marginRight:10}}><ReButton iconname="bell-outline" iconcolor="lightgray" iconsize={50}  height={50} width={50}  /></View>,
    headerLeft: () => <View style={{marginRight:20}}><ReButton iconname="reorder-horizontal" iconcolor="lightgray" iconsize={50}  height={50} width={50}  /></View>}} />
     <Stack.Screen name="Catalog" component={Catalog}  options={{title:'Catalog'}}/>
    <Stack.Screen name="CreateCatalog" component={CreateCatalog} options={{title:'Add Catalog'}} /> 
  <Stack.Screen name="AddNewProduct" component={AddNewProduct} options={{title:'Add New Product'}}/>
     {/* <Stack.Screen name="Products" component={Products}  options={{title:""}}/>
     <Stack.Screen name="ProductDetails" component={ProductDetails} options={{title:"",headerRight: () => <View style={{marginRight:20}}><ReThemeButton themeiconname="shopping-outline" iconcolor="buttontextcolor" iconsize={30}  height={30} width={30}  /></View>}} />
     <Stack.Screen name="Reviews" component={Reviews}  options={{title:""}}/> */}
  {/* <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown:false}}/> */}
   {/*  <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ title: "OTP Verification" }} />
    <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown:false}} />
    <Stack.Screen name="ForGetPasswordUpdate" component={ForgetPasswordUpdate} options={{ title: "Recover password" }} /> */}
  </Stack.Navigator>



)

export default HomeNavigator;