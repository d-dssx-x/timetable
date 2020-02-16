import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {formatDate, createPARAM_ADD} from '../helper'
import { Actions } from 'react-native-router-flux';
import Delete from './Delete';
import Add from './Add'
import { deleteSubject } from '../actions';
import {connect} from 'react-redux'


class Subject extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      PARAM : {
        day : this.props.day,
        store : this.props.store
      }
    }
  }
  _chooseModePress = () => {
    if(this.props.delete){
      return this.props.deleteSubject(this.props.store.id)
    }
    if(this.props.add){
      return Actions.edit(createPARAM_ADD(this.state.PARAM))
    }
    return Actions.edit(this.state.PARAM)
  }



  render(){
    return (
        <TouchableOpacity style = {styles.wrapper} onPress = {this._chooseModePress}>
          <View style = {styles.row}>
            {this.props.add && <Add />}
            {this.props.delete && <Delete />}
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
                {!this.props.add && <Text style = {styles.classroom}>{this.props.store.classroom}</Text>}
            </View>
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
  // swipe : {
  //   backgroundColor : '#fff'
  // },
  button :{
    width : 35,
    height : 35,
  },
  text : {
    fontSize : 50,
    fontWeight : '400',
    color : '#ff2121',
  },



  wrapper : {
    width : '100%',
    height : 70,
    justifyContent : 'center',
  },
  row : {
    width : '90%',
    marginLeft : '5%',
    height : 70,
    flexDirection : 'row',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  },
  time : {
      justifyContent : 'center',
      width : '12%'
  },
  timeText : {
    fontSize : 15,
    marginBottom : 5,
    fontWeight : '300',
  },
  colorBorder : {
    marginTop : 5,
    marginLeft : '5%',
    height : 60,
    borderRightWidth : 2,
  },
  subject : {
    marginLeft : '5%',
    justifyContent : 'center',
  },
  subjectText : {
       fontSize : 20,
       fontWeight : '300'
  },
  classroom : {
    fontSize : 12,
    marginTop : 5,
    fontWeight : '100'
  }
});
