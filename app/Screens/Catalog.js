import React, { useState } from 'react';
import { View ,Text, StyleSheet,useWindowDimensions } from 'react-native';
import SafeScreen from '../Components/SafeScreen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LynkProducts from './LynkProducts';
import MyCatalog from './MyCatalog';
import Trash from './Trash';
import colors from '../config/colors';
import ReInput from '../Components/ReInput';
function Catalog(props) {
    

    const FirstRoute = () => (
        // <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
        <LynkProducts/>
     );
 
     const SecondRoute = () => (
         //<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
       <MyCatalog/>
     );
     
     const thirdRoute = () => (
        //<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
     <Trash/>

    );
    
     const renderTabBar = props => (
         <TabBar
             {...props}
             
            // style={{ backgroundColor: 'white' }}
             gap={1}
        //    labelStyle={{color:'yellow'}}
             //contentContainerStyle={{backgroundColor:'white'}}
             activeColor={colors.linktextactive}
             pressColor={colors.whitecolor}
       inactiveColor={colors.lightgray}
 
       indicatorStyle={{ backgroundColor: colors.linktextactive }}
       style={{ backgroundColor: colors.whitecolor }}
            
             renderLabel={({ route, focused, color }) => (
                 
                 <Text style={{ color, fontSize:14,}} >
                     {route.title}
                 </Text>
 
             )}
             //tabStyle={{  width:80}}
             //    scrollEnabled
                 
                 
         />
     );
 
     const renderScene = SceneMap({
         first: FirstRoute,
         second: SecondRoute,
         third: thirdRoute,
        
     });
 
 
     const layout = useWindowDimensions();
 
     const [index, setIndex] = useState(0);
     const [routes] = useState([
         { key: 'first', title: 'Lynk Products' },
         { key: 'second', title: 'My Catalog' },
         { key: 'third', title: 'Trash' },
        
     ]);

     
  return (
    <SafeScreen style2={styles.safescreen}>
    <View style={styles.container}>
    <TabView
                    
                    navigationState={{ index, routes }}
                    renderTabBar={renderTabBar}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                /> 
    </View>
   
    </SafeScreen>
  );
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    // borderWidth:1,
    // borderColor:'black'
   },
   safescreen:{
    paddingRight:0,
    paddingLeft:0,
   },
})
export default Catalog;