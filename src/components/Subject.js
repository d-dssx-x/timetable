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
  render(){
    return (
        <TouchableOpacity style = {styles.wrapper} onPress = {this._chooseModePress}>
          <View style = {styles.row}>
            {this.props.add && <PlusBtn size = {{width : 40,height : 35}} font = {{fontSize : 40}}/>}
            {this.props.delete && <DeleteBtn size = {{width : 37,height : 35}} font = {{fontSize : 45}}/>}
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
                <Text style = {styles.subjectText}>{this.props.store.name}</Text>
                {this._showText(this.props.store.classroom) && <Text style = {styles.classroom}>{this.props.store.classroom}</Text>}
            </View>
          </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
      timetable : state.timetable
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
      marginTop : '1%',
  },
  timeText : {
    fontSize : 14,
    marginBottom : 5,
    fontWeight : '300',
    textAlign : 'center'
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
    width : '80%',
  },
  subjectText : {
       fontSize : 20,
       fontWeight : '200'
  },
  classroom : {
    fontSize : 12,
    marginTop : 5,
    fontWeight : '200'
  },
});
