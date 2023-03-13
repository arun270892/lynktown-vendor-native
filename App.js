import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import colors from './app/config/colors';
import { NavigationContainer , DarkTheme, DefaultTheme  } from '@react-navigation/native';
import CatalogNavigator from './app/navigation/CatalogNavigator';
import { navigationRef } from './app/navigation/rootNavigation';
import AppNavigator from './app/navigation/AppNavigator';
//import { RootSiblingParent } from 'react-native-root-siblings';


export default function App() {
  return (
    
    <NavigationContainer ref={navigationRef} >  
  {/* <CatalogNavigator/> */}
  <AppNavigator/>
   
</NavigationContainer> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
