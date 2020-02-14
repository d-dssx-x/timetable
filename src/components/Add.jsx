import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import formatDate from '../helper'
import { Actions } from 'react-native-router-flux';


export default function Add() {
  return (
    <View style = {styles.button}>
        <Text style = {styles.text}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button :{
    width : 40,
    height : 35,
    marginTop : 5,
  },
  text : {
    fontSize : 40,
    fontWeight : '200',
    color : '#34fa4f',
  },
});
