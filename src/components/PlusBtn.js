import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PlusBtn() {
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
    marginTop : '1%',
  },
  text : {
    fontSize : 40,
    fontWeight : '200',
    color : '#34fa4f',
  },
});
