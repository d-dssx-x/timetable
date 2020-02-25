import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function PseudoForm(props) {
  const value = props.value || ''
  return (
    <View>
        <View style = {styles.textWrap}>
            <Text style = {styles.text}>{props.text}</Text>
        </View>
        <TouchableWithoutFeedback style = {styles.wrapper} onPress = {()=>{props.press()}}>
            <View style = {styles.row} >
                <Text style = {styles.textForm}>{value}</Text>
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
  }
  
});
