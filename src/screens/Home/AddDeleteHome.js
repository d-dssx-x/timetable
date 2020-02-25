//render + and - buttons to delete subject from timetable

import React from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';
import Day from '../../components/Day';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import {Actions} from 'react-native-router-flux'


const filter = (props) =>{
    const monday    = props.timetable.filter((el)=> el.day === 'mon')
    const tuesday   = props.timetable.filter((el)=> el.day === 'tue')
    const wednesday = props.timetable.filter((el)=> el.day === 'wed')
    const thursday  = props.timetable.filter((el)=> el.day === 'thu')
    const friday    = props.timetable.filter((el)=> el.day === 'fri')
    const saturday  = props.timetable.filter((el)=> el.day === 'sat')
    const sunday    = props.timetable.filter((el)=> el.day === 'sun')
    return {monday,tuesday,wednesday,thursday,friday,saturday,sunday}
}


function AddDeleteHome(props) {
    let {monday,tuesday,wednesday,thursday,friday,saturday,sunday} = filter(props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Day store = {monday}    day = 'Monday'       delete = {true}    add = {true}/>
          <Day store = {tuesday}   day = 'Tuesday'      delete = {true}    add = {true}/>
          <Day store = {wednesday} day = 'Wednesday'    delete = {true}    add = {true}/>
          <Day store = {thursday}  day = 'Thursday'     delete = {true}    add = {true}/>
          <Day store = {friday}    day = 'Friday'       delete = {true}    add = {true}/>
          <Day store = {saturday}  day = 'Saturday'     delete = {true}    add = {true}/>
          <Day store = {sunday}    day = 'Sunday'       delete = {true}    add = {true}/>
        </ScrollView>
        <Button callback = {()=>{Actions.push('home');Actions.replace('home')}} active = {styles.active}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  active : {
    backgroundColor : '#999999',
    color : '#fff'
  }
});



const mapStateToProps = state => {
    return {
        timetable : state.timetable
    }
}


export default connect(mapStateToProps,{})(AddDeleteHome)