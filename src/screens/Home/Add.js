//You can add subject to timetable

import React from 'react';
import { StyleSheet, View, Keyboard, Text} from 'react-native';
import {TouchableWithoutFeedback, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import DatePicker from '../../components/TimePicker';
import Form from '../../components/Form';
import colors from '../../store/colors'
import SearchList from '../../components/SearchList'
import { connect } from 'react-redux';
import {addSubject,saveNameSubject,saveTimePattern} from '../../actions'
import { Actions } from 'react-native-router-flux';
import PseudoForm from '../../components/PseudoForm';
import CircleRow from '../../components/CircleRow'

class Add extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active : [false,false,false,false,false,false,false], //add style to active component
            activeDatePicker : [false,false], //show or close TimePicker components
            time : [new Date(),new Date()],// start and finish times
            //time : [props.store.start,props.store.finish],
            value : ['',''],
            // value : [props.store.subject,props.store.classroom],  
            activeColor : [false,false,false,false,false,false,false],
            color : '',
            showSearch : false,
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
    // _saveDay = (id) => { //save data of day in store
    //     const week = ['mon','tue','wed','thu','fri','sat','sun']
    //     this.props.dayChange(week[id],this.props.store.id)
    //     this._setDay(id)
    // }
    _activeDatePicker = (id) => { // show and !show time picker 
        let arr = this.state.activeDatePicker
        id === 0 ? arr[1] = false : arr[0] = false
        arr[id] = !arr[id]
        this.setState({activeDatePicker:arr})
    }
    _setColor = (id) => {
        let arr = this.state.activeColor.map((el) => el === true ? false : false)
        arr[id] = true
        this.setState({activeColor : arr,color : colors[id]})
    }
    _setTime = (id,value) => { //save time (start - index of 0,finish - index of 1)
        let arr = this.state.time
        arr[id] = value
        const valueH = value.getHours()
        const valueM = value.getMinutes()
        if(id == 0){
            const secondTime = this.props.timePattern.find(el=>{
                const tmpHours = new Date(el.start).getHours()
                const tmpMinutes = new Date(el.start).getMinutes()
                if(tmpHours === valueH && tmpMinutes ===  valueM){
                    return el.finish
                }
            })
            if(secondTime !== undefined){
                arr[1] = secondTime.finish
            }
        }
        this.setState({time:arr})
    }


    _setText = (id,value) => {
        let arr = this.state.value
        arr[id] = value
        this.setState({value:arr})
    }
    _saveSubject = () => {
        this.props.saveTimePattern(this.state.time[0],this.state.time[1])
        this.props.saveNameSubject(this.state.value[0])
        this.props.addSubject(this.state.value[0],this.state.value[1],this.state.time[0],this.state.time[1],this.state.color,this.props.day.slice(0,3).toLowerCase())
        Actions.push('home')
        Actions.replace('addDeleteHome')
        Actions.replace('home')
    }
    _showSearch = () => {
        this.setState({showSearch : true})
    }
    _closeSearch = () => {
        this.setState({showSearch : false})
    }
    _chooseSubjectInSearch = (id,index) => {
        let arr = this.state.value
        arr[id] = this.props.subjects[index].name
        this.setState({value:arr})
        this._closeSearch()
    }

    componentDidMount(){
        this._selectDay(this.props.day)
    }
    render(){
        return (
            <TouchableWithoutFeedback style = {styles.container} onPress = {()=>{Keyboard.dismiss()}}>
                {!this.state.showSearch &&
                    <ScrollView scrollEnabled={!this.state.showSearch}>
                        <PseudoForm text = {'Subject'} value = {this.state.value[0]} press = {this._showSearch}/>
                        <Form text = {'Classroom'} type = {'numeric'} id = {1} value = {this.state.value[1]} setText = {this._setText}
                        onEndEditing = {()=>{}}/>
                        <DatePicker text = {'Start'}  time = {this.state.time[0]} id = {0} active = {this.state.activeDatePicker[0]}
                            press = {this._activeDatePicker}
                            setTime = {this._setTime}
                            />
                        <DatePicker text = {'Finish'} time = {this.state.time[1]} id = {1} active = {this.state.activeDatePicker[1]} 
                            press = {this._activeDatePicker}
                            setTime = {this._setTime}
                            />
                        <CircleRow text = {['Mon','Tue','Wed','Thu','Fri','Sat','Sun']} type = {'DAY'} active = {this.state.active} press = {this._setDay} color = {[]}/>
                        <CircleRow text = {[]} type = {'COLOR'} active = {this.state.activeColor} press = {this._setColor} color = {colors}/>
                        <Button press = {this._saveSubject} />
                    </ScrollView>
                }
                {this.state.showSearch &&
                    <View style = {styles.container}>
                        <Form text = {'Subject'} type = {'default'} id = {0} value = {this.state.value[0]} setText = {this._setText} 
                            onSubmitEditing = {this._closeSearch}
                            autoFocus = {true}
                        />
                        <SearchList chooseTitle = {this._chooseSubjectInSearch} id = {0}/>
                    </View>
                }
            </TouchableWithoutFeedback>
        );
    }
}

const Button = (props) =>{
    return(
        <View>
            <TouchableOpacity style = {styles.button} onPress = {props.press}>
                <Text style = {styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
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
  },
  button : {
      marginTop : 30,
      width : '90%',
      marginLeft : '5%',
      height : 60,
      justifyContent : 'center',
      alignItems : 'center',
      borderColor : '#e6e6e6',
      borderWidth : 1,
      borderRadius : 20,
      marginBottom : 50
  },
  buttonText : {
      color : '#999999',
      fontSize : 30,
  }
});
const mapStateToProps = state => {
    return {
        subjects : state.subjects,
        timePattern : state.timePattern
    }
}


export default connect(mapStateToProps,{addSubject,saveNameSubject,saveTimePattern})(Add)
