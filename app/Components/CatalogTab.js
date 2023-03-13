import React, { useState } from 'react';
import { View , StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import LynksTab from './LynksTab';
import ReIcon from './ReIcon';
import ReText from './ReText';


const products = [
    {
        id: 1,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
    {
        id: 2,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
    {
        id: 3,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
    {
        id: 4,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
    {
        id: 5,
        image: require("../assets/rimages/man.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
    {
        id: 6,
        image: require("../assets/rimages/women.png"),
        title: "blue jeans jacket",
        size: 'S, M, L',
        limit: '50',
        price: "$198.11",
    },
]


function CatalogTab({title}) {
    const [shouldShow, setShouldShow] = useState(true);
  return (
   
    <>
    
    <View style={styles.titlecontainer}>
        <View style={styles.textcontainer}>
        <ReText style={styles.text} fontSize={14}>{title} (6)</ReText>
        </View>
           
            <TouchableOpacity style={styles.iconcontainer}  onPress={() => setShouldShow(!shouldShow)}>
                <ReIcon name='chevron-up' iconcolor='whitecolor' size={35}/>
            </TouchableOpacity>
           
        </View>
    <View style={styles.container}>
   
       
         {
            
         }
        {shouldShow ?
        (
        <View>
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
                                price={item.price}
                                borderColor={colors.linktextactive}
                                borderWidth={1}
                               // onPress={() => navigation.navigate(Routes.PRODUCTEDETAILS)}
                            />
                        }
                    />
            </View>  ) : null}
            
    </View>
    </>
  );
}
const styles = StyleSheet.create({
   container:{
   // height:400,
    // paddingLeft:7,
    // paddingRight:7,
    // borderColor:'black',
    // borderWidth:1,
   },
   textcontainer:{
    width:'93%',
    // borderWidth:1,
    // borderColor:'black'
   },
   iconcontainer:{
    width:21,
    height:21,
    borderRadius:5,
    backgroundColor:colors.linktextactive,
   justifyContent:'center',
   alignItems:'center',
//    borderWidth:1,
//     borderColor:'black'
   },
   titlecontainer:{
    width:'100%',
    flexDirection:'row',
    //justifyContent:'',
    alignItems:'center',
    // borderWidth:1,
    // borderColor:'black',
    height:40,
    paddingLeft:7,
    paddingRight:7,
   },
   text:{
    fontWeight:"bold"
   },
})
export default CatalogTab;