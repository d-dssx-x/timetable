import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate} from '../helper'


export default function TimePicker(props) {
    return (
        <View style = {styles.dateCont}>
            <View style = {styles.textWrap}>
                <Text style = {styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style = {styles.wrapper} onPress = {()=>props.press(props.id)}>
                <View style = {styles.row}>
                    <Text style = {styles.date}>{formatDate(props.time)}</Text>
                </View>
            </TouchableOpacity>
            {props.active&&<DateTimePicker value = {new Date(props.time)}
                mode = {'time'}
                style = {styles.datePick}
                onChange={(event,value)=>props.setTime(props.id,value)}
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height : '100%'
  },
//   wrapper : {
//       marginTop : 30
//   },
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
  date : {
    fontSize : 20,
    fontWeight : '300',
  },
  
});
