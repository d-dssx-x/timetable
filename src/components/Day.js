import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Subject from './Subject';
import { ADD_SUBJECT } from '../store/add';

const day = (day) =>{
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

export default function Day(props) {
    let subjects = props.store.map((el,i)=><Subject store = {el} day = {props.day} delete = {props.delete} add = {false} key = {i} edit = {props.edit}/>)
    let stl = styles.dateText
    if(new Date().getDay()  === day(props.day)){  
       stl = [styles.dateText,styles.active]
    }
    return (
        <View>
            <View style = {styles.date}>
                <Text style = {stl}>{props.day}</Text>
            </View>
            {subjects}
            {props.add && <Subject store = {ADD_SUBJECT} day = {props.day} delete = {false} add = {true} edit = {false}/>}
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
