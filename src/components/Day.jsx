import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Subject from './Subject';
import { ADD_SUBJECT } from '../store/add';

const day = (day) =>{
  const week = {
    "Monday"    : 0,
    "Tuesday"   : 1,
    "Wednesday" : 2,
    "Thursday"  : 3,
    "Friday"    : 4,
    "Saturday"  : 5,
    "Sunday"    : 6
  }
  return week[day]
}

export default function Day(props) {
    let subjects = props.store.map((el,i)=><Subject store = {el} day = {props.day} delete = {props.delete} add = {false} key = {i}/>)
    let stl = styles.dateText
    if(new Date().getDay() -1 === day(props.day)){  
       stl = [styles.dateText,styles.active]
    }
    return (
        <View>
            <View style = {styles.date}>
                <Text style = {stl}>{props.day}</Text>
            </View>
            {subjects}
            {props.add && <Subject store = {ADD_SUBJECT} day = {props.day} delete = {false} add = {true}/>}
        </View>
    );
}

const styles = StyleSheet.create({
  date : {
    width : '100%',
    marginLeft: '5%',
    marginTop : 10,
  },
  dateText : {
    fontSize : 20,
    fontWeight : '200'
  },
  active : {
    color : '#fa37a8'

  }
});
