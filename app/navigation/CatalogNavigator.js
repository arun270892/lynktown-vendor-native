import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../config/colors';
// import WelcomeScreen from '../Screens/WelcomeScreen';
import Catalog from '../Screens/Catalog';
import CreateCatalog from '../Screens/CreateCatalog';
import AddNewProduct from '../Screens/AddNewProduct';
// import Signup from '../Screens/Signup';
// import SuccessScreen from '../Screens/SuccessScreen';
// import ForgetbyEmail from '../Screens/ForgetbyEmail';
// import BackButton from '../Components/BackButton';
// import OTPScreen from '../Screens/OTPScreen';
// import ResetPassword from '../Screens/ResetPassword';

const Stack = createStackNavigator();

const CatalogNavigator = () => (

  <Stack.Navigator screenOptions={{
   // headerTransparent: true,
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 20 },
    headerTintColor: colors.primarycolor,
   // headerBackImage: () => <BackButton  />,
    initialRouteName:"WelcomeScreen", 

  }}>
    {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} /> */}
     <Stack.Screen name="Catalog" component={Catalog}  options={{title:'Catalog'}}/>
    <Stack.Screen name="CreateCatalog" component={CreateCatalog} options={{title:'Add Catalog'}} /> 
  <Stack.Screen name="AddNewProduct" component={AddNewProduct} options={{title:'Add New Product'}}/>
     {/*<Stack.Screen name="ForgetbyEmail" component={ForgetbyEmail} options={{title:""}}/>
   <Stack.Screen name="OTPScreen" component={OTPScreen} options={{title:""}} />
   
    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: "" }} /> */}
  </Stack.Navigator>



)
export default CatalogNavigator;