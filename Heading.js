import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={Headingstyles.Headingcontainercontainer}>
      <Text style={Headingstyles.headingwelcome}>Good Morning, Welcome to</Text>
      <Text style={Headingstyles.Headingheading}>MyPlanter</Text>
    </View>
    
  );
};

const Headingstyles = StyleSheet.create({
  Headingcontainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    paddingTop: 20,
    paddingHorizontal: 16,
    //backgroundColor: '#ffffff',
    zIndex: 1,
  },
  Headingheading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  Headingglyph: {
    position: 'absolute',
    top: 0,
    right: 3,
    paddingTop:25,
    paddingHorizontal: 0,
    //backgroundColor: '#ffffff',
    zIndex: 1,
    fontSize: 30,
  },
  headingwelcome: {
    fontSize: 13,  }
});




export default AppHeader;
