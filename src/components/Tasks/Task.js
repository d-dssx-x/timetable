import React from 'react';
import { StyleSheet, View, Text, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native';
import DeleteBtn from '../DeleteBtn'
import { Actions } from 'react-native-router-flux';
import { formatDate } from '../../helper';


const chooseTypePress = (props) => {
  const PARAM = {
    ...props,
    types : 'EDIT',
    title : props.name
  }
  if(!props.edit){
    Actions.details_task(PARAM)
  }else{
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
          onPress: () => {console.log('fsfsfsf')}
        },
      ],
    );
  }
}


function Task(props) {
  return (
      <TouchableOpacity style = {styles.wrapper} onPress = {()=>chooseTypePress(props)}>
          <View style = {styles.row}>
            <View style = {styles.right}>
              {!props.edit &&
                <TouchableOpacity style = {[styles.button,{marginTop : 20}]} onPress = {()=>props.doneBtn(props.id,props.done)}>
              {props.done  &&
                <ActiveBtn />}
                </TouchableOpacity>}
              {props.edit &&
                <DeleteBtn size = {{width : 30,height : 70}} font = {{fontSize : 40,textAlign : 'center',marginTop : 10}}/>
              }
            </View>
            <View style = {[styles.border,{borderColor : props.color}]} />
            <View style = {styles.left}>
                {!props.close &&
                  <Text style = {styles.subject}>{props.subject}</Text>
                }
                <Text style = {styles.name}>{props.name}</Text>
                <Text style = {styles.date}>{formatDate(props.finish)}</Text>
            </View>
          </View>
      </TouchableOpacity>
  );
}

const ActiveBtn = () => {
  return(
    <View style = {styles.active}>
      <View style = {styles.point}>
        <View style = {styles.point2}></View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper : {
    width : '100%',
    height : 70,
  },
  row : {
    width : '90%',
    height : 70,
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
    flexDirection : 'row'
  },
  right : {
    marginRight : 15,

    height : 70
  },
  border : {
    height : 55,
    borderRightWidth : 2,
    borderColor : '#32a852',
    marginRight : 15,
    marginTop : 7.5
  },
  left : {
    justifyContent : 'space-evenly'
  },
  button : {
    width : 30,
    height : 30,
    borderWidth : 1,
    borderRadius : 15,
    borderColor : '#e6e6e6',
  },
  subject : {
    fontSize : 15,
    fontWeight : '200'
  },
  name : {
    fontSize : 20,
    fontWeight : '300',
    paddingBottom : 1
  },
  date : {
    fontSize : 15,
    fontWeight : '200'
  },
  active : {
    marginTop : 1.5,
    width : 25,
    height : 25,
    borderRadius : 12.5,
    backgroundColor : '#d1d1d1',
    marginLeft : 1.5,
    justifyContent : 'center'
  },
  point : {
    width : 20,
    height : 20,
    borderRadius : 10,
    backgroundColor : '#fff',
    marginLeft : 2.5,
    justifyContent : 'center'
  },
  point2 : {
    width : 15,
    height : 15,
    borderRadius : 7.5,
    backgroundColor : '#d1d1d1',
    marginLeft : 2.5
  },
});


export default Task