import React from 'react';
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default function Form(props) {
  const value = props.value || ''
  return (
    <View>
        <View style = {styles.textWrap}>
            <Text style = {styles.text}>{props.text}</Text>
        </View>
        <View style = {styles.wrapper}>
            <TextInput style = {styles.row} keyboardType = {props.type} value = {value} onChangeText = {(value)=>{props.setText(props.id,value)}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  textWrap : {
    width : '100%',
    marginLeft: '5%',
    marginTop : 10,
  },
  text : {
    fontSize : 20,
    fontWeight : '200'
  },

  wrapper: {
    width : '100%',
    height : 50,

  },
  row : {
    width : '90%',
    marginLeft : '5%',
    height : 50,
    fontSize : 20,
    fontWeight : '300',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  }
  
});
