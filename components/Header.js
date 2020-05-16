/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  
  StyleSheet,
  View,
  Text,
  Image,
 
} from 'react-native';
const Header =({ title })=>{
  return(
    <View style={styles.header}>
<Text style={styles.text}>{title}</Text>

    </View>
  )
}

Header.defaultProps ={
    title:'Shopping Lists'
}
const styles = StyleSheet.create({
  header:{
   height:60,
   padding: 15,
    backgroundColor:'darkslateblue',
    
  },
  text:{
    color:'#fff',
    fontSize:23,
    textAlign:'center',
   
  },
  img:{
width:100,
height:100,
borderRadius:100 /2,


  }
})
export default Header;
