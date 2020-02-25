import React from 'react';
import { StyleSheet,View} from 'react-native';
import Day from '../../components/Day';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { Actions} from 'react-native-router-flux';
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
    return (
      <View style={styles.container}>
        <ScrollView style = {styles.scroll}>
          {!!monday.length    && <Day store = {monday}    day = 'Monday'    add = {false} delete = {false} edit = {true}/>}
          {!!tuesday.length   && <Day store = {tuesday}   day = 'Tuesday'   add = {false} delete = {false} edit = {true}/>}
          {!!wednesday.length && <Day store = {wednesday} day = 'Wednesday' add = {false} delete = {false} edit = {true}/>}
          {!!thursday.length  && <Day store = {thursday}  day = 'Thursday'  add = {false} delete = {false} edit = {true}/>}
          {!!friday.length    && <Day store = {friday}    day = 'Friday'    add = {false} delete = {false} edit = {true}/>}
          {!!saturday.length  && <Day store = {saturday}  day = 'Saturday'  add = {false} delete = {false} edit = {true}/>}
          {!!sunday.length    && <Day store = {sunday}    day = 'Sunday'    add = {false} delete = {false} edit = {true}/>}
          <View style = {styles.empty}></View>
        </ScrollView>
        <Button callback = {()=>{Actions.push('addDeleteHome');Actions.replace('addDeleteHome')}} active = {null}/>
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