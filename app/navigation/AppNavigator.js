import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View , StyleSheet ,Image, TouchableOpacity} from 'react-native';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeNavigator from './HomeNavigator';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import AddCatagory from '../Screens/AddCatagory';
import Profile from '../Screens/Profile';

// import AuthNavigator from './AuthNavigator';
// import ProfileNavigator from './ProfileNavigator';
// import Notifications from '../Screens/Notifications';
// import Profile from '../Screens/Profile';
// import ReThemeIcon from '../Components/ReThemeIcon';
// import Cart from '../Screens/Cart';
// import CartNavigator from './CartNavigator';



const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();


// const home=()=>{
// setActive("home")
// }
// const cart=()=>{
//     setActive("cart")
//     }
const AppNavigator = () => (

  <Tab.Navigator 
//   inactiveColor="white"
//   activeColor='black'
//   barStyle={{ backgroundColor: 'white' }}
  
  
  screenOptions={{
   // headerTransparent: true,
    headerTintColor: colors.linktextactive,
    tabBarActiveTintColor: colors.linktextactive,
     tabBarInactiveTintColor: colors.lightgray,
    
    // tabBarActiveBackgroundColor: colors.primarycolor,
     //tabBarInactiveBackgroundColor:colors.secondarycolor,
    headerShown: false,
    
    
    tabBarStyle: {
       height:100
      },
      tabBarItemStyle:{
 
        height:42,
        width:10,
        marginTop:5,
       // marginBottom:100,
        marginRight:25,
        marginLeft:25,
        borderRadius:10,
      },
  }
}
  >
    
    {/* <Tab.Screen name="login" component={AuthNavigator} options={{tabBarStyle:{display:'none'}}} ></Tab.Screen> */}
    <Tab.Screen name="home" component={HomeNavigator} options={({ route }) => ({
        
      tabBarStyle: ((route) => {
     
        const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen"
       // console.log(routeName)

        if (routeName !== 'HomeScreen') {
            
          return { display: "none" }

        }

        return
      })(route),
      
       tabBarIcon:  ({focused, color, size }) => <MaterialCommunityIcons name="home-outline" size={size} color={color} />
      //tabBarIcon:  ({focused, color, size }) =><MaterialCommunityIcons name="home" size={size} color={color} />
    })} ></Tab.Screen>

    <Tab.Screen name="AddCatagory" component={AddCatagory} options={({ route }) => ({
      tabBarStyle: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Cart"
       // console.log(routeName)

        if (routeName !== 'Cart') {
          return { display: "none" }
        }

        return
      })(route),
      tabBarIcon:  ({focused, color, size }) => <MaterialCommunityIcons name="plus-circle" size={size} color={colors.linktextactive} />
      //tabBarIcon:  ({focused, color, size }) =><MaterialCommunityIcons name="cart" size={size} color={color} />
    })} ></Tab.Screen>
   
     <Tab.Screen name="Profile" component={Profile}  options={({ route }) => ({
      tabBarStyle: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Notifications"
       // console.log(routeName)

        if (routeName !== 'Notifications') {
          return { display: "none" }
        }

        return
      })(route),
      tabBarIcon:  ({focused, color, size }) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
    //tabBarIcon:  ({focused, color, size }) =><MaterialCommunityIcons name="bell" size={size} color={color} />
    })} ></Tab.Screen>

    {/* <Tab.Screen name="profile" component={ProfileNavigator} options={({ route }) => ({
      tabBarStyle: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Profile"
       // console.log(routeName)

        if (routeName !== 'Profile') {
          return { display: "none" }
        }

        return
      })(route),
      tabBarIcon:  ({focused, color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      //tabBarIcon:  ({focused, color, size }) =><MaterialCommunityIcons name="account" size={size} color={color} />
    })}></Tab.Screen>  */}



{/* <Tab.Screen name="welcome" component={AuthNavigator} options={({ route }) => ({
      tabBarStyle: ((route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "WelcomeScreen"
       // console.log(routeName)

        if (routeName !== 'WelcomeScreen') {
          return { display: "none" }
        }

        return
      })(route),
      tabBarIcon:  ({focused, color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      //tabBarIcon:  ({focused, color, size }) =><MaterialCommunityIcons name="account" size={size} color={color} />
    })}></Tab.Screen>  */}

  </Tab.Navigator>
)


const styles = StyleSheet.create({
    activestyle:{
        backgroundColor:"black",
        borderRadius:50,
        height:35,
        width:35,
        justifyContent:'center',
        alignItems:'center',
    },
    inactivestyle:{
        backgroundColor:"white",
       borderRadius:50,
        height:35,
        width:35,
        justifyContent:'center',
        alignItems:'center',
    },

 })
export default AppNavigator;