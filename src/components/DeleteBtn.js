import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Delete(props) {
  return (
    <View style = {props.size}>
        <Text style = {[props.font,styles.text]}>-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button :{
    width : 37,
    height : 35,
  },
  text : {
    fontWeight : '400',
    color : '#ff2121',
  },
});
