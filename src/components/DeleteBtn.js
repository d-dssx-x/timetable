import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Delete() {
  return (
    <View style = {styles.button}>
        <Text style = {styles.text}>-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button :{
    width : 40,
    height : 35,
  },
  text : {
    fontSize : 45,
    fontWeight : '400',
    color : '#ff2121',
  },
});
