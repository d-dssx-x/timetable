import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import {TouchableWithoutFeedback, ScrollView} from 'react-native-gesture-handler';
import TimePicker from '../../components/TimePicker';
import Form from '../../components/Form';
import colors from '../../store/colors'
import { connect } from 'react-redux';
import {subjectChange, classroomChange, startTimeChange,finishTimeChange,dayChange,colorChange} from '../../actions'
import PseudoForm from '../../components/PseudoForm';
import SearchList from '../../components/SearchList'
import CircleRow from '../../components/CircleRow'

class Edit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active : [false,false,false,false,false,false,false], //add style to active component
            activeDatePicker : [false,false], //show or close TimePicker components
            time : [props.store.start,props.store.finish],// start and finish times
            value : [props.store.name,props.store.classroom], 
            activeColor : [false,false,false,false,false,false,false],
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
        this._setText(id,arr[id])
        this._closeSearch()
    }
    

    componentDidMount(){
        this._selectDay(this.props.day)
        this._selectColor(this.props.store.color)
    }
    render(){
        return (
            <TouchableWithoutFeedback style = {styles.container} onPress = {()=>{Keyboard.dismiss()}}>
                {!this.state.showSearch && 
                    <ScrollView scrollEnabled={!this.state.showSearch}>
                        <PseudoForm text = {'Subject'} value = {this.state.value[0]} press = {this._showSearch}/>
                        <Form text = {'Classroom'} type = {'numeric'} id = {1} value = {this.state.value[1]} setText = {this._setText}
                            onSubmitEditing = {()=>{}}/>
                        <TimePicker text = {'Start'}  time = {this.state.time[0]} id = {0} active = {this.state.activeDatePicker[0]}
                            press = {this._activeDatePicker}
                            setTime = {this._setTime}
                            mode = 'time'
                            />
                        <TimePicker text = {'Finish'} time = {this.state.time[1]} id = {1} active = {this.state.activeDatePicker[1]} 
                            press = {this._activeDatePicker}
                            setTime = {this._setTime}
                            mode = 'time'
                            />
                        <CircleRow text = {['Mon','Tue','Wed','Thu','Fri','Sat','Sun']} type = {'DAY'} active = {this.state.active} press = {this._saveDay} color = {[]}/>
                        <CircleRow text = {[]} type = {'COLOR'} active = {this.state.activeColor} press = {this._saveColor} color = {colors}/>
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
const mapStateToProps = state => {
    return {
        subjects : state.subjects,
    }
}


export default connect(mapStateToProps,{subjectChange, classroomChange, startTimeChange,finishTimeChange,dayChange,colorChange})(Edit)