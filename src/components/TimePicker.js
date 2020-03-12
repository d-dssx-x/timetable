import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatTime, formatDate} from '../helper'

const chooseTypeFormatDate = (mode,time) => {
  switch (mode){
    case 'time' : return formatTime(time)
    case 'date' : return formatDate(time)
  }
}



export default function TimePicker(props) {
    return (
      <TouchableOpacity onPress = {()=>props.press(props.id)}>
        <View style = {styles.wrapper}>
          <View style = {styles.row}>
            <View style = {styles.left}>
              <Text style = {styles.text}>{props.text}</Text>
            </View>
            <View style = {styles.right}>
              <Text style = {styles.text}>{chooseTypeFormatDate(props.mode,props.time)}</Text>
            </View>
          </View>
        </View>
        {props.active &&
          <DateTimePicker value = {new Date(props.time)}
          mode = {props.mode}
          onChange={(event,value)=>props.setTime(props.id,value)}
          />
        }
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  wrapper : {
    width : '100%',
    height : 50
  },
  row : {
    width : '90%',
    height : 50,
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
    flexDirection : 'row',
  },
  left : {
    width : '50%',
    height : 50,
    justifyContent : 'center'
  },
  right : {
    width : '50%',
    height : 50,
    alignItems : 'flex-end',
    justifyContent : 'center'
  },
  text : {
    fontSize : 20,
    fontWeight : '200'
  }
  
});
