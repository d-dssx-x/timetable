import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Day from '../components/Day';
import {ScrollView} from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { Actions} from 'react-native-router-flux';




function Home(props) {
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
          {!!monday.length    && <Day store = {monday}    day = 'Monday'    add = {false} delete = {false} />}
          {!!tuesday.length   && <Day store = {tuesday}   day = 'Tuesday'   add = {false} delete = {false} />}
          {!!wednesday.length && <Day store = {wednesday} day = 'Wednesday' add = {false} delete = {false} />}
          {!!thursday.length  && <Day store = {thursday}  day = 'Thursday'  add = {false} delete = {false} />}
          {!!friday.length    && <Day store = {friday}    day = 'Friday'    add = {false} delete = {false} />}
          {!!saturday.length  && <Day store = {saturday}  day = 'Saturday'  add = {false} delete = {false} />}
          {!!sunday.length    && <Day store = {sunday}    day = 'Sunday'    add = {false} delete = {false} />}
        </ScrollView>
        <Button callback = {()=>{Actions.push('setting');Actions.replace('setting')}} active = {null}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
});



const mapStateToProps = state => {
    return {
        subjects : state.subjects
    }
}


export default connect(mapStateToProps,null)(Home)