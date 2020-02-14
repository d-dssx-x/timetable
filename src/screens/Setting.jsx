import React from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';
import Day from '../components/Day';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Button from '../components/Button';
import {Actions} from 'react-native-router-flux'
import { deleteSubject } from '../actions';



function Setting(props) {
    const monday    = props.subjects.filter((el)=> el.day === 'mon')
    const tuesday   = props.subjects.filter((el)=> el.day === 'tue')
    const wednesday = props.subjects.filter((el)=> el.day === 'wed')
    const thursday  = props.subjects.filter((el)=> el.day === 'thu')
    const friday    = props.subjects.filter((el)=> el.day === 'fri')
    const saturday  = props.subjects.filter((el)=> el.day === 'sat')
    const sunday    = props.subjects.filter((el)=> el.day === 'sun')
    return (
      <View style={styles.container}>
        <ScrollView>
          <Day store = {monday}    day = 'Monday'     delete = {true}    add = {true}/>
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
        subjects : state.subjects
    }
}


export default connect(mapStateToProps,{deleteSubject})(Setting)