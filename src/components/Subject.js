import React from 'react';
import { StyleSheet, Text, View ,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {formatDate} from '../helper'
import { Actions } from 'react-native-router-flux';
import DeleteBtn from './DeleteBtn';
import { deleteSubject } from '../actions';
import {connect} from 'react-redux'
import PlusBtn from './PlusBtn';

class Subject extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      PARAM : {
        day : this.props.day,
        store : this.props.store
      },
      time : new Date()
    }
  }
  _chooseModePress = () => {
    if(this.props.delete){
      Alert.alert(
        'Delete',
        'Are you sure you want to delete?',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => { 
              return this.props.deleteSubject(this.props.store.id)
            }
          },
        ],
      );
    }
    if(this.props.add){
      let PARAM  = {day : this.props.day}
      return Actions.add(PARAM)
    }
    if(this.props.edit){
      return Actions.edit(this.state.PARAM)
    }
    
  }
  _showText = (text) =>{
    let flag = false
    if(text !== '') flag = true
    return  flag
  }
  _showOnline = (start,finish,day) =>{
    const week = {
      "Monday"    : 1,
      "Tuesday"   : 2,
      "Wednesday" : 3,
      "Thursday"  : 4,
      "Friday"    : 5,
      "Saturday"  : 6,
      "Sunday"    : 0
    }
    let nowCorrect = new Date(2020,0,1,new Date().getHours(),new Date().getMinutes())
    let correct = new Date()
    return (correct.getDay() == week[day] && nowCorrect>start && nowCorrect<finish)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 30000);//
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render(){
    return (
        <TouchableOpacity style = {styles.wrapper} onPress = {this._chooseModePress}>
          <View style = {styles.row}>
            {this.props.add && <PlusBtn />}
            {this.props.delete && <DeleteBtn />}
            {(!this.props.add && !this.props.delete)  && <View style = {styles.time}>
                <View>
                    <Text style = {styles.timeText}>{formatDate(this.props.store.start)}</Text>
                </View>
                <View>
                    <Text style = {styles.timeText}>{formatDate(this.props.store.finish)}</Text>
                </View>
            </View>}
            <View style = {[styles.colorBorder,{ borderColor : this.props.store.color}]}></View>
            <View style = {styles.subject}>
                <Text style = {styles.subjectText}>{this.props.store.subject}</Text>
                {this._showText(this.props.store.classroom) && <Text style = {styles.classroom}>{this.props.store.classroom}</Text>}
            </View>
            {this._showOnline(this.props.store.start,this.props.store.finish,this.props.day) && <View style = {styles.circle} />}
          </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
      subjects : state.subjects
  }
}


export default connect(mapStateToProps,{deleteSubject})(Subject)
const styles = StyleSheet.create({
  button :{
    width : 35,
    height : 35,
  },
  text : {
    fontSize : 50,
    fontWeight : '200',
    color : '#ff2121',
  },
  wrapper : {
    width : '100%',
    height : 60,
    justifyContent : 'center',
  },
  row : {
    width : '90%',
    marginLeft : '5%',
    height : 60,
    flexDirection : 'row',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  },
  time : {
      justifyContent : 'center',
      width : '11%',
      marginTop : '1%'
  },
  timeText : {
    fontSize : 14,
    marginBottom : 5,
    fontWeight : '300',
  },
  colorBorder : {
    marginTop : 5,
    marginLeft : '4%',
    marginRight : '5%',
    height : 50,
    borderRightWidth : 2,
  },
  subject : {
    justifyContent : 'center',
    width : '69%',
  },
  subjectText : {
       fontSize : 20,
       fontWeight : '300'
  },
  classroom : {
    fontSize : 12,
    marginTop : 5,
    fontWeight : '200'
  },
  circle : {
    width : 20,
    height : 20,
    backgroundColor : '#85ff85',
    borderRadius : 10,
    marginTop : 20,
    marginLeft : 10
  }
});
