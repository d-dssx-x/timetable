import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Form from '../../components/Form';
import CircleRow from '../../components/CircleRow';
import { TouchableOpacity, ScrollView, Switch } from 'react-native-gesture-handler';
import colors from '../../store/colors'
import SaveBtn from '../../components/SaveBtn'
import TimePicker from '../../components/TimePicker';
import TypeBtn from '../../components/InfoSubjects/TypeBtn'

import SwitchBtn from '../../components/SwitchBtn';



class Add extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      values : [this.props.navigation.state.params.name || '',''],
      active : [false,false,false,false,false,false,false],
      description : 'Add to timetable?',
      show : false,
      activeColor :[false,false,false,false,false,false,false],
      activeBtn : [true,false,false],//Choose report from (none,Exam,Credit)
      time : [new Date(),new Date()],
      activeTimePicker : [false,false]
    }
  }
  setValues = (id,value) => {
    let arr = this.state.values
    arr[id] = value
    this.setState({values:arr})
  }
  setDay = (id) => {
    let arr = this.state.active.map(el => el = false)
    arr[id] = true
    this.setState({active : arr})
  }
  setColor = (id) => {
    let arr = this.state.activeColor.map(el => el = false)
    arr[id] = true
    this.setState({activeColor : arr})
  }
  setTime = (id,value) => {
    let arr = this.state.time
    arr[id] = value
    this.setState({time : arr})
  }


  activeTypeButton = (id) => {
    let arr = this.state.activeBtn.map(el => el = false)
    arr[id] = true
    this.setState({activeBtn : arr})
  }
  activeTimePicker = (id) => {
    let arr = this.state.activeTimePicker
    id === 0 ? arr[1] = false : arr[0] = false
    arr[id] = !arr[id]
    this.setState({activeTimePicker:arr})
  }
  switchChangeValue = (type) => {
    this.setState({show : !type})
  }
  setActiveTypeBtn = () => {
    console.log(this.props)
  }






  ///////////////////REDUX
  save = () => {
    this.setState({show : false})
  }

  // const [name,setName] = useState('') //Form subject
  // const [classroom,setClass] = useState('')//Form classroom
  // const [active,setActive] = useState(false)//Show timetable's fields
  // const [description,setDesc] = useState('Add to timetable?') 
  // let [activeWeek,setWeek] = useState([false,true,false,false,false,false,false])
  // const setValue = (id,value) => {
  //   switch (id) {
  //     case 0 : return setName(value)
  //     case 1 : return setClass(value)
  //   }
  // }
  // const setDay = (id) => {
  //   console.log(id)
  //   let arr = activeWeek.map(el=>el = false)
  //   activeWeek[id] = true
  //   setWeek(activeWeek)
  // }

  render(){
    const {values,active,description,show,activeColor,activeBtn,time,activeTimePicker,patternDescription} = this.state
    return(
      <View style = {styles.container}>
        <ScrollView>
          <Form text = 'Subject' type = {'default'} onSubmitEditing = {()=>{}} value = {values[0]} id = {0} setText = {this.setValues}/>
          <SwitchBtn text = {description} value = {show} onValueChange = {this.switchChangeValue} />
          {show &&
            <View>
              <Form text = 'Classroom' type = 'numeric' onSubmitEditing = {()=>{}} value = {values[1]} id = {1} setText = {this.setValues} />
              <TimePicker text = {'Start'}  time = {time[0]} id = {0} active = {activeTimePicker[0]}
                  press = {this.activeTimePicker}
                  setTime = {this.setTime}
                  mode = {'time'}
                  />
              <TimePicker text = {'Finish'} time = {time[1]} id = {1} active = {activeTimePicker[1]} 
                  press = {this.activeTimePicker}
                  setTime = {this.setTime}
                  mode = {'time'}
                  />
              <CircleRow text = {['Mon','Tue','Wed','Thu','Fri','Sat','Sun']} type = {'DAY'} active = {active} color = {[]} press = {this.setDay}/>
              <CircleRow text = {[]} type = {'COLOR'} active = {activeColor} color = {colors} press = {this.setColor}/>
              <SaveBtn press = {this.save} />
            </View>
          }
          {!show &&
            <TypeBtn press = {this.activeTypeButton} active = {activeBtn} />}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  button : {
    width : '90%',
    marginLeft : '5%',
    height : 40,
    marginTop : 10,
    flexDirection : 'row',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  },
  left : {
    width : '50%',
    height : 40
  },
  right : {
    width : '50%',
    height : 40,
    alignItems : 'flex-end'
  },
  textButton : {
    fontSize : 20,
    fontWeight : '200',
  },
  wrapper : {
    width : '100%',
    height : 55,
    marginTop : 10,
  },
  row : {
    width : '90%',
    height : 55,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginLeft : '5%',
    borderColor : '#e6e6e6',
    borderBottomWidth : 1,
  },
})

export default Add