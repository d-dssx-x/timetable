import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Icon} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';



class TabBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color : ['#cfcfcf','#cfcfcf','#cfcfcf','#cfcfcf']
        }
    }
    changeColorButton = (id) => {
        let arr = this.state.color
        arr = arr.map(el => el ===  '#000' ? el = '#cfcfcf' : el)
        arr[id] =  '#000'
        this.setState({color : arr})
    }
    goToTimetable = () => {
        Actions.home({id : 0})
        Actions.replace('home')

    }
    goToInfo = () => {
        Actions.info({id : 1})
        Actions.replace('info')
    }
    goToTasks = () => {
        Actions.tasks({id : 2})
        Actions.replace('tasks')
    }
    goToSettings = () => {
        Actions.settings({id : 3})
        Actions.replace('settings')
    }
    selectButton = () => {
        let arr = this.state.color.map( el=> el = '#cfcfcf')
        arr[this.props.id] = '#000'
        this.setState({color : arr})
    }
    componentDidMount(){
        this.selectButton()
    }
    render(){
        let {color} = this.state
        return(
            <View style = {styles.tabBar}>
                <View style = {styles.buttonWrapp}>
                    <Icon
                        size = {35}
                        name = 'subject'
                        iconStyle = {[styles.button,{color : color[0]}]}
                        onPress = {()=>{
                            this.changeColorButton(0)
                            this.goToTimetable()
                        }}
                    />
                    <Text style = {[styles.text,{color : color[0]}]}>Timetable</Text>
                </View>
                <View style = {styles.buttonWrapp}>
                    <Icon
                        size = {35}
                        name = 'class'
                        iconStyle = {[styles.button,{color : color[1]}]}
                        onPress = {()=>{
                            this.changeColorButton(1)
                            this.goToInfo()
                        }}
                    />
                    <Text style = {[styles.text,{color : color[1]}]}>Subjects</Text>
                </View>
                <View style = {styles.buttonWrapp}>
                    <Icon
                        size = {35}
                        name = 'assignment-turned-in'
                        iconStyle = {[styles.button,{color : color[2]}]}
                        onPress = {()=>{
                            this.changeColorButton(2)
                            this.goToTasks()
                        }}
                    />
                    <Text style = {[styles.text,{color : color[2]}]}>Tasks</Text>
                </View>
                <View style = {styles.buttonWrapp}>
                    <Icon
                        size = {35}
                        name = 'settings-applications'
                        iconStyle = {[styles.button,{color : color[3],marginTop : 2}]}
                        onPress = {()=>{
                            this.changeColorButton(3)
                            this.goToSettings()
                        }}
                    />
                    <Text style = {[styles.text,{color : color[3],marginTop : 2}]}>Settings</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  tabBar : {
    width : '100%',
    bottom : 0,
    position : 'absolute',
    height : 60,
    borderColor :  '#c9c9c9',
    borderTopWidth : 1,
    backgroundColor :'rgba(240, 240, 240, 0.8)',
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  buttonWrapp : {
    justifyContent : 'center',
    alignItems : 'center',
    width : 60,
    height : 40,
    marginTop : 10
  },
  button : {
    backgroundColor :'rgba(250, 250, 250, 0.0)',
  },
  text : {
      fontSize : 12,
      fontWeight : '700'
  },
  active : {
      color : '#000',
      padding : 0
  },
  
});


export default TabBar