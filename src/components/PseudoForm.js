import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const placeholder = (value) => {
  return value === 'Subject' ? styles.placeholder : styles.textForm
}

export default function PseudoForm(props) {
  const value = props.value || 'Subject'

  return (
    <View style = {styles.container}>
        <TouchableWithoutFeedback style = {styles.wrapper} onPress = {()=>{props.press()}}>
            <View style = {styles.row}>
                <Text style = {placeholder(value)}>{value}</Text>
            </View>
        </TouchableWithoutFeedback>
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
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
    justifyContent : 'center'
  },
  textForm : {
    fontSize : 20,
    fontWeight : '300',
  },
  placeholder : {
    fontSize : 20,
    fontWeight : '300',
    color : '#c9c9c9'
  }
});
