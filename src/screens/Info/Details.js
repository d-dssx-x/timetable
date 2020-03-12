import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import TabBar from '../../components/TabBar';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import ToggleBtn from '../../components/ToggleBtn'
import Swiper from 'react-native-swiper';
import Task from '../../components/Tasks/Task'




class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeToggle : [styles.active,false],
      index : 0,
      done : [],
      current : [],
      edit : false
    }
  }
  switchButton = (id) => {
    let arr = this.state.activeToggle.map(el => el !== null ? null : null)
    arr[id] = styles.active
    this.setState({active:arr,index : id})
  }
  touchButton = (id) => {
      this.refs.swiper.scrollBy(id-this.state.index, true)
      this.switchButton(id)
  }
  filterTypeTasks = () => {
    const tasks = this.props.tasks.filter(el => el.subject === this.props.navigation.state.params.name)
    const done = tasks.filter(el=>el.done === true)
    const current = tasks.filter(el=>el.done === false)
    this.setState({current : current,done : done})
  }
  componentDidMount(){
    this.filterTypeTasks()
  }
  render(){
    let {activeToggle,current,done} = this.state
    return (
      <View>
        <ToggleBtn press = {this.touchButton} active = {activeToggle} 
          name = {['Сurrent','Done']}/>
        <Swiper ref = 'swiper' showsButtons = {true}  showsPagination = {false} onMomentumScrollEnd={(e, state, context) => {this.touchButton(state.index)}} loop ={false}>
          <ScrollView>
            {current.map((el,i)=>{
              return <Task {...el} key = {i} edit = {edit} />
            })}
            {edit && <AddTask />}
          </ScrollView>
          <ScrollView>
            {done.map((el,i)=>{
              return <Task key = {i} {...el} edit = {edit} />
            })}
            {edit && <AddTask />}
          </ScrollView>
        </Swiper>
        <Button callback = {this.edit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  active : {
    backgroundColor : '#fff'
  },
});


const mapStateToProps = state => {
  return {
    tasks : state.tasks
  }
}
export default connect(mapStateToProps,null)(Details)