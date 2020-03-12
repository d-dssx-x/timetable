import React, { useState } from 'react';
import { StyleSheet,View ,Text} from 'react-native';
import Day from '../../components/Day';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';

const filter = (props) => {
  const monday    = props.timetable.filter((el)=> el.day === 'mon')
  const tuesday   = props.timetable.filter((el)=> el.day === 'tue')
  const wednesday = props.timetable.filter((el)=> el.day === 'wed')
  const thursday  = props.timetable.filter((el)=> el.day === 'thu')
  const friday    = props.timetable.filter((el)=> el.day === 'fri')
  const saturday  = props.timetable.filter((el)=> el.day === 'sat')
  const sunday    = props.timetable.filter((el)=> el.day === 'sun')
  return {monday,tuesday,wednesday,thursday,friday,saturday,sunday}
}


function Home(props) {
    let {monday,tuesday,wednesday,thursday,friday,saturday,sunday} = filter(props)
    let [edit,setEdit] = useState(true)
    return (
      <View style={styles.container}>
        <ScrollView style = {styles.scroll}>
          {(!!monday.length    || !edit) && <Day store = {monday}    day = 'Monday'    edit = {edit}/>}
          {(!!tuesday.length   || !edit) && <Day store = {tuesday}   day = 'Tuesday'   edit = {edit}/>}
          {(!!wednesday.length || !edit) && <Day store = {wednesday} day = 'Wednesday' edit = {edit}/>}
          {(!!thursday.length  || !edit) && <Day store = {thursday}  day = 'Thursday'  edit = {edit}/>}
          {(!!friday.length    || !edit) && <Day store = {friday}    day = 'Friday'    edit = {edit}/>}
          {(!!saturday.length  || !edit) && <Day store = {saturday}  day = 'Saturday'  edit = {edit}/>}
          {(!!sunday.length    || !edit) && <Day store = {sunday}    day = 'Sunday'    edit = {edit}/>}
          <View style = {styles.empty}></View>
        </ScrollView>
        <Button callback = {()=>{setEdit(!edit)}}/>
        <TabBar id = {props.id || 0}/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  empty : {
    width : '100%',
    height : 59
  },
  tabBar : {
    width : '100%',
    height : 60,
    borderColor :  '#c9c9c9',
    borderTopWidth : 1,
    backgroundColor :'#ebebeb',
    flexDirection : 'row'
  },
  button : {
    width : 40,
    height : 40,
    color : '#fff',
    backgroundColor :'#ebebeb',
  },
});



const mapStateToProps = state => {
    return {
      timetable : state.timetable,
    }
}


export default connect(mapStateToProps,null)(Home)