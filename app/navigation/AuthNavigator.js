import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../config/colors';
// import WelcomeScreen from '../Screens/WelcomeScreen';
import Login from '../Screens/Login';
// import Signup from '../Screens/Signup';
// import SuccessScreen from '../Screens/SuccessScreen';
// import ForgetbyEmail from '../Screens/ForgetbyEmail';
// import BackButton from '../Components/BackButton';
// import OTPScreen from '../Screens/OTPScreen';
// import ResetPassword from '../Screens/ResetPassword';

const Stack = createStackNavigator();

const AuthNavigator = () => (

  <Stack.Navigator screenOptions={{
   // headerTransparent: true,
    headerTitleAlign: "center",
    headerTitleStyle: { fontSize: 23 },
    headerTintColor: colors.primarycolor,
   // headerBackImage: () => <BackButton  />,
    initialRouteName:"WelcomeScreen", 

  }}>
    {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} /> */}
     <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
    {/* <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
   <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown:false}}/>
   <Stack.Screen name="ForgetbyEmail" component={ForgetbyEmail} options={{title:""}}/>
   <Stack.Screen name="OTPScreen" component={OTPScreen} options={{title:""}} />
   
    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: "" }} /> */}
  </Stack.Navigator>



)
export default AuthNavigator;