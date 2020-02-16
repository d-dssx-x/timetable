import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {TouchableOpacity } from 'react-native-gesture-handler';



function Button(props) {
    return(
        <View style = {[styles.button,props.active]}>
          <TouchableOpacity style = {styles.wrapper} onPress = {props.callback}>
              <Text style = {[styles.text,props.active]}>+</Text>
          </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    width : 50,
    height : 46,
    justifyContent : 'center',
    alignItems : 'center',
  },
  button : {
    zIndex : 1,
    position : 'absolute',
    top : '83%',
    left : '74%',
    width:50,
    height:50,
    borderRadius : 25,
    borderWidth : 2,
    borderColor : '#999999',
  },
  text : {
      color : '#999999',
      fontSize : 37,
      fontWeight : '300',
      marginBottom : 3,
      marginRight : 3,
  }
});


export default Button