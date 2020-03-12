import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { connect } from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button'
import TabBar from '../../components/TabBar'
import AddButton from '../../components/InfoSubjects/AddButton';
import SubjectInfo from '../../components/InfoSubjects/SubjectInfo';
import { Actions } from 'react-native-router-flux';
import ToggleBtn from '../../components/ToggleBtn';


class InfoSubject extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active : [styles.active,null,null],
      type : 'all',
      subject : this.props.subjects,
      subjectExam : [],
      subjectCredit : [],
      index : 0,
      edit : false
    }
  }
  switchButton = (id) => {
    let arr = this.state.active.map(el => el !== null ? null : null)
    arr[id] = styles.active
    this.setState({active:arr,index : id,edit : false})
  }
  touchButton = (id) => {
      this.refs.swiper.scrollBy(id-this.state.index, true)
      this.switchButton(id)
  }
  filterTypeSubjects = () => {
    const subjectExam = this.props.subjects.filter(el => el.type === 'exam')
    const subjectCredit = this.props.subjects.filter(el => el.type === 'credit')
    this.setState({subjectExam : subjectExam,subjectCredit : subjectCredit})
    
  }
  componentDidMount(){
    this.filterTypeSubjects()
  }
  render(){
    let {active,subject,subjectExam,subjectCredit,edit} = this.state
    return (
      <View style={styles.container}>
        <ToggleBtn press = {this.touchButton} active = {active} 
          name = {['All','Exam','Credit']}
        />
          <Swiper ref = 'swiper' showsButtons = {true}  showsPagination = {false} onMomentumScrollEnd={(e, state, context) => {this.switchButton(state.index)}} loop ={false}>
            <ScrollView>
              {subject.map((el,i) =>{
                return <SubjectInfo name = {el.name} key = {i} tasks = {this.props.tasks} edit = {edit}/>
              })}
            {edit && <AddButton press = {()=>Actions.push('add_info')}/>}
            </ScrollView>
            <ScrollView>
              {subjectExam.map((el,i) =>{
                return <SubjectInfo name = {el.name} key = {i} tasks = {this.props.tasks}/>
              })}
            </ScrollView>
            <ScrollView>
              {subjectCredit.map((el,i) =>{
                return <SubjectInfo name = {el.name} key = {i} tasks = {this.props.tasks}/>
              })}
            </ScrollView>
          </Swiper>
          <Button callback = {()=>{
            this.setState({edit : !this.state.edit})}}/>
        <TabBar id = {this.props.id || 1}/>
      </View>
    );
  }
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
  add : {
    width : '100%',
    height : 50
  },
  rowAdd : {
    width : '90%'
  }
});
const mapStateToProps = state => {
  return {
    subjects : state.subjects,
    tasks : state.tasks
  }
}

export default connect(mapStateToProps,null)(InfoSubject)