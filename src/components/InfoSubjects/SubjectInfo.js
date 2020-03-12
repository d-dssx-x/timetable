import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DeleteBtn from '../DeleteBtn'
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';


const chooseModePress = (edit,props) => {
  if(!edit){
    const PARAM = {
      name : props.name,
      title : props.name,
      id : 2,
      tabBarMiddle : true,
      filterSubject : true
    }
    Actions.tasks(PARAM)
    Actions.replace('tasks')
  }else{
    const PARAM = {
      title : props.name,
      id : 2,
      ...props
    }
    Actions.add_info(PARAM)
  }
}

const SubjectInfo = (props) => {
  const filterTasks = props.tasks.filter(el => el.subject === props.name && el.done != true)
  console.log(filterTasks)
  return(
    <TouchableOpacity style = {styles.wrapper} onPress = {()=>chooseModePress(props.edit,props)}>
      <View style = {styles.row}>
        {props.edit  && 
          <Icon size = {20}
                name = 'edit'
                iconStyle = {styles.edit}
                color  = '#3489eb'
          />}
        <View style = {styles.left}>
          <Text style = {styles.text}>{props.name}</Text>
        </View>
        <View style = {styles.right}>
          {filterTasks.length > 3 && 
            <View style = {styles.task}>
              <Text style = {styles.taskText}>+{filterTasks.length - 3}</Text>
            </View>
          }
          {filterTasks.splice(0,3).map((el,i) => <Circle color = {el.color} key = {i}/>)}
        </View>
      </View>
    </TouchableOpacity>
)
}

const Circle = (props) => {
  return (
    <View style = {[styles.circle,{backgroundColor : props.color}]} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  wrapper : {
    width : '100%',
    height : 50,
  },
  row : {
    width : '90%',
    height : 50,
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
    flexDirection : 'row',
  },
  left : {
    width : '75%',
    height : 50,
    justifyContent : 'center',
  },
  // dateWrapper : {
  //   height : 15,
  // },
  text : {
    fontSize : 20,
    fontWeight : '200',
  },
  // textDate : {
  //   fontSize : 15,
  //   fontWeight : '100'
  // },
  right : {
    width : '25%',
    overflow : 'hidden',
    height : 50,
    justifyContent : 'flex-end',
    flexDirection : 'row',
  },
  task : {
    height : 50,
    marginTop : 15,
    marginRight : 5
  },
  taskText : {
    fontSize : 18,
    fontWeight : '200'
  },
  circle : {
    width : 15,
    height : 15,
    borderRadius : 7.5,
    marginRight : 5,
    marginTop : 17.5,
    backgroundColor : '#000'
  },
  active : {
    backgroundColor : '#fff'
  },
  edit : {
    height : 50,
    width : 30,
    marginTop : 17.5
  }
});

export default SubjectInfo