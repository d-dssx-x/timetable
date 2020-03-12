import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import Form from '../../components/Form'
import { ScrollView } from 'react-native-gesture-handler'
import PseudoForm from '../../components/PseudoForm'
import SearchList from '../../components/SearchList'
import { connect } from 'react-redux'
import SwitchBtn from '../../components/SwitchBtn'
import TimePicker from '../../components/TimePicker'
import CircleRow from '../../components/CircleRow'
import SaveBtn from '../../components/SaveBtn'
import colors from '../../store/colors'
import {nameTask,colorTask,subjectTask,noteTask,doneTask,finishTask} from '../../actions'



class Details extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.navigation.state.params.id,
            values : [this.props.navigation.state.params.name || '',this.props.navigation.state.params.note || '',this.props.navigation.state.params.subject || ''],
            showSearch : false,
            switchType : false,
            finish : this.props.navigation.state.params.finish || new Date(),
            switchTime : false,
            activeColor : [false,false,false,false,false,false,false],
            type : this.props.navigation.state.params.types || 'ADD',
            switchDone : this.props.navigation.state.params.done, //switcher Done task
        }
    }

    setValues = (id,value) => {
        let arr = this.state.values
        arr[id] = value
        this.setState({values : arr})
        this.saveValue(id,value)
    }
    saveValue = (id,value) => {
        switch (id){
            case 0 : return this.props.nameTask(this.state.id,value)
            case 1 : return this.props.noteTask(this.state.id,value)
            case 2 : return this.props.subjectTask(this.state.id,value)
        }
    }


    showSearch = () => {
        this.setState({showSearch : true})
    }
    closeSearch = () => {
        this.setState({showSearch : false})
    }
    chooseSubjectInSearch = (id,index) => {
        let arr = this.state.values
        arr[id] = this.props.subjects[index].name
        this.saveValue(id,arr[id])
        this.setState({value:arr})
        this.closeSearch()
    }
    switchChangeValue = (type) => {
        this.setState({switchType : !type})
    }
    switchChangeDone = (type) => {
        this.setState({switchDone : !type})
    }
    activeDatePicker = () => {
        this.setState({switchTime : !this.state.switchTime})
    }

    setTime = (value) => {
        this.setState({finish : value})
    }
    saveTime = (id,value) => {
        this.props.finishTask(this.state.id,value)
        this.setTime(value)
    }

    saveDone = (type) => {
        this.props.doneTask(this.state.id,type)
        this.switchChangeDone(type)
    }


    setColor = (id) => {
        let arr = this.state.activeColor.map((el) => el === true ? false : false)
        arr[id] = true
        this.setState({activeColor : arr})
    }
    selectColor = (color) => {
        const index = colors.findIndex(el => el === color)
        this.setColor(index)
    }
    saveColor = (id) => {
        this.setColor(id)
        this.props.colorTask(this.state.id,colors[id])
    }



    componentDidMount(){
        this.selectColor(this.props.navigation.state.params.color)
    }
    render(){
        const {values,showSearch,switchType,finish,switchTime,activeColor,type,switchDone} = this.state
        return(
            <ScrollView style = {styles.container}>
                {showSearch &&
                    <View style = {styles.container}>
                        <Form text = 'Subjects' type = 'default' onSubmitEditing = {this.closeSearch} value = {values[2]} id = {2} setText = {this.setValues} />
                        <SearchList chooseTitle = {this.chooseSubjectInSearch} id = {2}/>
                    </View>
                }   
               {!showSearch &&
                    <View>
                        <Form text = 'Task'  type = 'default' onSubmitEditing = {()=>{}} value = {values[0]} id = {0} setText = {this.setValues} />
                        <Form text = 'Notes' type = 'default' onSubmitEditing = {()=>{}} value = {values[1]} id = {1} setText = {this.setValues} note = {true}/>
                        <PseudoForm value = {values[2]} press = {this.showSearch}/>
                        <SwitchBtn value = {switchType} text = {'Add finish time?'} onValueChange = {this.switchChangeValue}/>
                        {switchType && 
                            <TimePicker text = {'Finish'}  time = {finish} id = {0} active = {switchTime}
                                press = {this.activeDatePicker}
                                setTime = {this.saveTime}
                                mode = 'date'
                        />}
                        <CircleRow text = {[]} type = {'COLOR'} active = {activeColor} press = {this.saveColor} color = {colors}/>
                        {type === 'EDIT' && 
                            <SwitchBtn value = {switchDone} text = {'Done?'} onValueChange = {this.saveDone}/>
                        }
                        {type === 'ADD' &&
                            <SaveBtn press = {()=>{}}/>
                        }
                    </View>
                }        
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        subjects : state.subjects,
    }
}


export default connect(mapStateToProps,{nameTask,colorTask,subjectTask,noteTask,doneTask,finishTask})(Details)


const styles = StyleSheet.create({
    wrapper : {
        width : '100%',
        height : 50
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
        width : '50%',
        height : 50,
        justifyContent : 'center'
    },
    right : {
        width : '50%',
        height : 50,
        alignItems : 'flex-end',
        justifyContent : 'center'
    },
    text : {
        fontSize : 20,
        fontWeight : '200'
    }
}
)