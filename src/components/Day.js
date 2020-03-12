import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Subject from './Subject';
import { ADD_SUBJECT } from '../store/add';

const days = (day) =>{
  const week = {
    "Monday"    : 1,
    "Tuesday"   : 2,
    "Wednesday" : 3,
    "Thursday"  : 4,
    "Friday"    : 5,
    "Saturday"  : 6,
    "Sunday"    : 0
  }
  return week[day]
}
const selectActiveDay = (day) => {
  let stl = styles.dateText
    if(new Date().getDay()  === days(day)){  
       stl = [styles.dateText,styles.active]
    }
    return stl
}

export default function Day(props) {
    return (
        <View>
            <View style = {styles.date}>
                <Text style = {selectActiveDay(props.day)}>{props.day}</Text>
            </View>
            {props.store.map((el,i)=>{
              return <Subject store = {el} day = {props.day} key = {i} edit = {props.edit}/>
            })}
            {!props.edit && <Subject store = {ADD_SUBJECT} day = {props.day} add = {true}/>}
        </View>
    );
}


const styles = StyleSheet.create({
  date : {
    width : '100%',
    marginLeft: '5%',
    marginTop : 10,
    marginBottom : 10
  },
  dateText : {
    fontSize : 23,
    fontWeight : '300'
  },
  active : {
    color : '#fa37a8'
  }
});
