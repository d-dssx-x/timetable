import React from 'react';
import { StyleSheet, Text, View, ShadowPropTypesIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const note = (note) => {
  return note === true
}
const noteSize = (note) => {
  return note === true ? {height : 100} : {height : 50}
}

export default function Form(props) {
  const value = props.value || ''
  return (
    <View>
        <View style = {[styles.wrapper,noteSize(props.note)]}>
            <TextInput style = {[styles.row,noteSize(props.note)]} keyboardType = {props.type} value = {value} onChangeText = {(value)=>{props.setText(props.id,value)}}
              onSubmitEditing = {()=>{props.onSubmitEditing()}}
              autoFocus = {props.autoFocus}
              placeholder = {props.text}
              multiline={props.note}
            />
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
  },
  row : {
    width : '90%',
    marginLeft : '5%',
    fontSize : 20,
    fontWeight : '300',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  }
  
});
