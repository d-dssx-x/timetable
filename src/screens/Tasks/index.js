import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TabBar from '../../components/TabBar';
import { ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Swiper from 'react-native-swiper';
import Task from '../../components/Tasks/Task'
import { connect } from 'react-redux';
import PlusBtn from '../../components/PlusBtn'
import { Actions } from 'react-native-router-flux';
import ToggleBtn from '../../components/ToggleBtn';
import { doneTask } from '../../actions';
import { Value } from 'react-native-reanimated';


class Tasks extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks : [],
      activeDoneBtn : false,
      activeSwitchBtn : [styles.activeSwitch,null],
      index : 0,
      current : [],
      done : [],
      edit : false,
      activeAdd : null
    }
  }

  switchBtn = (id) => {
    let arr = this.state.activeSwitchBtn.map(el => el !== null ? null : null)
    arr[id] = styles.activeSwitch
    this.setState({activeSwitchBtn:arr,index : id})
  }
  touchButton = (id) => {
    this.refs.swiper.scrollBy(id-this.state.index, true)
    this.switchBtn(id)
  }
  filterTypeTasks = () => {
    let tasks = []
    if(this.props.navigation.state.params.filterSubject){
      tasks = this.props.tasks.filter(el=>el.subject === this.props.navigation.state.params.name)
      this.setState({tasks : tasks})
    }else{
      tasks = this.props.tasks
    }
    const done = tasks.filter(el=>el.done === true)
    const current = tasks.filter(el=>el.done === false)
    this.setState({current : current,done : done})
  }
  edit = () => {
    this.setState({edit : !this.state.edit})
  }


  doneBtn = (id,done) => {
    this.props.doneTask(id,done)
    this.filterTypeTasks()
  }



  componentDidMount(){
    this.filterTypeTasks()
  }
  render(){
    let {activeSwitchBtn,current,done,activeAdd,edit} = this.state
    return (
      <View style={styles.container}>
        <ToggleBtn press = {this.touchButton} active = {activeSwitchBtn} 
          name = {['Сurrent','Done']}/>
        <Swiper ref = 'swiper' showsButtons = {true}  showsPagination = {false} onMomentumScrollEnd={(e, state, context) => {this.touchButton(state.index)}} loop ={false}>
          <ScrollView>
            {current.map((el,i)=>{
              return <Task {...el} key = {i} edit = {edit} close = {this.props.navigation.state.params.filterSubject}
                doneBtn = {this.doneBtn}
              />
            })}
            {edit && <AddTask />}
          </ScrollView>
          <ScrollView>
            {done.map((el,i)=>{
              return <Task key = {i} {...el} edit = {edit} close = {this.props.navigation.state.params.filterSubject} 
              doneBtn = {this.doneBtn}
              />
            })}
            {edit && <AddTask />}
          </ScrollView>
        </Swiper>
        <Button callback = {this.edit} />
        <TabBar id = {this.props.id || 1} middle = {this.props.navigation.state.params.tabBarMiddle}/>
      </View>
    );
  }
}
const AddTask = () => {
  const PARAM = {
    types : 'ADD',
    title : 'Add task'
  }
  return(
    <TouchableOpacity style = {[styles.wrapper,{height : 50}]} onPress = {()=>Actions.details_task(PARAM)}>
      <View style = {[styles.row,{height : 50}]}>
        <PlusBtn size = {{width : 30,height :50,marginLeft : 5}} font = {{fontSize : 35}}/>
        <Text style = {styles.textTask}>Add task</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
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
  active : {
    marginTop : 1.5,
    width : 25,
    height : 25,
    borderRadius : 12.5,
    backgroundColor : '#d1d1d1',
    marginLeft : 1.5,
    justifyContent : 'center'
  },
  activeSwitch : {
    backgroundColor : '#fff'
  },
  textTask : {
    fontSize : 20,
    fontWeight : '300',
    marginTop : 12,
    marginLeft : 25
  }
});
const mapStateToProps = state => {
  return {
    tasks : state.tasks
  }
}
export default connect(mapStateToProps,{doneTask})(Tasks)