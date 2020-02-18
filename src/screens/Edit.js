import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import {TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from '../components/TimePicker';
import Circle from '../components/Circle';
import Form from '../components/Form';
import colors from '../store/colors'
import { connect } from 'react-redux';
import {subjectChange, classroomChange, startTimeChange,finishTimeChange,dayChange,colorChange} from '../actions'

class Edit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active : [false,false,false,false,false,false,false], //add style to active component
            activeDatePicker : [false,false], //show or close TimePicker components
            time : [props.store.start,props.store.finish],// start and finish times
            value : [props.store.subject,props.store.classroom], 
            activeColor : [false,false,false,false,false,false,false]
        }
    }
    _selectDay = (day) => { //transform string example : "monday" to index 1
        const week = {
            "Monday"    : 0,
            "Tuesday"   : 1,
            "Wednesday" : 2,
            "Thursday"  : 3,
            "Friday"    : 4,
            "Saturday"  : 5,
            "Sunday"    : 6
        }
        this._setDay(week[day])
    }
    _setDay = (id) => { //set active("with border") day of week's circle 
        let arr = this.state.active.map((el) => el === true ? false : false)
        arr[id] = true
        this.setState({active : arr})
    }
    _saveDay = (id) => { //save data of day in store
        const week = ['mon','tue','wed','thu','fri','sat','sun']
        this.props.dayChange(week[id],this.props.store.id)
        this._setDay(id)
    }
    _activeDatePicker = (id) => { // show and !show time picker 
        let arr = this.state.activeDatePicker
        id === 0 ? arr[1] = false : arr[0] = false
        arr[id] = !arr[id]
        this.setState({activeDatePicker:arr})
    }
    _setTime = (id,value) => { //save time (start - index of 0,finish - index of 1)
        let arr = this.state.time
        arr[id] = value
        this.setState({time : arr})
        if(id === 0) this.props.startTimeChange(value,this.props.store.id)
        if(id === 1) this.props.finishTimeChange(value,this.props.store.id)
    }
    _setText = (id,text) => {
        let arr = this.state.value
        arr[id] = text
        this.setState({value : arr})
        if(id === 0) this.props.subjectChange(text,this.props.store.id)
        if(id === 1) this.props.classroomChange(text,this.props.store.id)
    }

    _selectColor = (color) => {
        const index = colors.findIndex(el => el === color)
        this._setColor(index)
    }
    _setColor = (id) => {
        let arr = this.state.activeColor.map((el) => el === true ? false : false)
        arr[id] = true
        this.setState({activeColor : arr})
    }
    _saveColor = (id) => {
        this._setColor(id)
        this.props.colorChange(colors[id],this.props.store.id)
    }
    

    componentDidMount(){
        this._selectDay(this.props.day)
        this._selectColor(this.props.store.color)
    }
    render(){
        return (
            <TouchableWithoutFeedback style = {styles.container} onPress = {()=>{Keyboard.dismiss()}}>
                <ScrollView>
                    <Form text = {'Subject'}   type = {'default'} id = {0} value = {this.state.value[0]} setText = {this._setText}/>
                    <Form text = {'Classroom'} type = {'numeric'} id = {1} value = {this.state.value[1]} setText = {this._setText}/>
                    <DatePicker text = {'Start'}  time = {this.state.time[0]} id = {0} active = {this.state.activeDatePicker[0]}
                        press = {this._activeDatePicker}
                        setTime = {this._setTime}
                        />
                    <DatePicker text = {'Finish'} time = {this.state.time[1]} id = {1} active = {this.state.activeDatePicker[1]} 
                        press = {this._activeDatePicker}
                        setTime = {this._setTime}
                        />
                    <View style = {styles.wrapper}>
                        <View style = {styles.row}>
                            <Circle text = 'Mon' id = {0} type = {'DAY'} active = {this.state.active[0]} press = {this._saveDay}/>
                            <Circle text = 'Tue' id = {1} type = {'DAY'} active = {this.state.active[1]} press = {this._saveDay}/>
                            <Circle text = 'Wed' id = {2} type = {'DAY'} active = {this.state.active[2]} press = {this._saveDay}/>
                            <Circle text = 'Thu' id = {3} type = {'DAY'} active = {this.state.active[3]} press = {this._saveDay}/>
                            <Circle text = 'Fri' id = {4} type = {'DAY'} active = {this.state.active[4]} press = {this._saveDay}/>
                            <Circle text = 'Sat' id = {5} type = {'DAY'} active = {this.state.active[5]} press = {this._saveDay}/>
                            <Circle text = 'Sun' id = {6} type = {'DAY'} active = {this.state.active[6]} press = {this._saveDay}/>
                        </View>
                    </View>
                    <View style = {styles.wrapper}>
                        <View style = {styles.row}>
                            <Circle id = {0} type = {'COLOR'} active = {this.state.activeColor[0]} press = {this._saveColor} color = {colors[0]}/>
                            <Circle id = {1} type = {'COLOR'} active = {this.state.activeColor[1]} press = {this._saveColor} color = {colors[1]}/>
                            <Circle id = {2} type = {'COLOR'} active = {this.state.activeColor[2]} press = {this._saveColor} color = {colors[2]}/>
                            <Circle id = {3} type = {'COLOR'} active = {this.state.activeColor[3]} press = {this._saveColor} color = {colors[3]}/>
                            <Circle id = {4} type = {'COLOR'} active = {this.state.activeColor[4]} press = {this._saveColor} color = {colors[4]}/>
                            <Circle id = {5} type = {'COLOR'} active = {this.state.activeColor[5]} press = {this._saveColor} color = {colors[5]}/>
                            <Circle id = {6} type = {'COLOR'} active = {this.state.activeColor[6]} press = {this._saveColor} color = {colors[6]}/>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height : '100%'
  },
  wrapper : {
      height : 60,
      marginTop : 10,
  },
  row : {
    height : 60,
    flexDirection : 'row',
    width : '90%',
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderBottomColor : '#e6e6e6'
  },
  color : {
    width : 40,
    height : 40,
    borderRadius : 20,
    justifyContent : 'center',
    alignItems : "center",
    marginRight:'2.8%',
    borderColor : '#999999',
    marginTop : 5,
    backgroundColor : "#e45e5f"
  },
  active : {
     borderWidth : 3
  }
});


export default connect(null,{subjectChange, classroomChange, startTimeChange,finishTimeChange,dayChange,colorChange})(Edit)