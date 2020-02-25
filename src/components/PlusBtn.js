import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function PlusBtn(props) {
  return (
    <View style = {[styles.button,props.size]}>
        <Text style = {[styles.text,props.font]}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button :{
    marginTop : '1%',
  },
  text : {
    fontWeight : '200',
    color : '#34fa4f',
  },
});
