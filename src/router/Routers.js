//Router between screens
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Router, Scene ,Actions } from 'react-native-router-flux';
import { Icon} from 'react-native-elements'
/*Home */
import Home from '../screens/Home/'
import Edit from '../screens/Home/Edit';
import Add from '../screens/Home/Add';
/*Settings */
import Settings from '../screens/Settings/'
/*Tasks */
import Tasks from '../screens/Tasks/'
import DetailsTask from '../screens/Tasks/Details'
/*Subjects Info*/
import InfoSubject from '../screens/Info/';
import Add_Subjects from '../screens/Info/Add'
import Details from '../screens/Info/Details';


export default function Routers() {
  return (
    <Router>
      <Scene key = 'root'> 
      {/*Main Screen Home, render Timetable*/}
        <Scene key = 'home' 
          component = {Home}
          title = ''
          renderBackButton={() =>{null}}
          renderLeftButton={()=>{null}} 
        />
        <Scene key = 'edit'
          component = {Edit}
          title = 'Edit'/>
        <Scene key = 'add'
          component = {Add}
          title = "Add"/>

        {/*SETTINGS SCREEN */}
        <Scene key = 'settings'
          component = {Settings}
          title = 'Settings'
          renderBackButton={() =>{null}}
          renderLeftButton={()=>{null}} 
        />

        {/*TASKS SCREEN */}
        <Scene key = 'tasks' 
          component = {Tasks}
          title = 'Tasks'
          renderBackButton={() =>{null}}
          renderLeftButton={()=>{null}} 
        />
        <Scene key = 'details_task'
          component = {DetailsTask}
          title = ''
        />

        {/*INFO SUBJECT SCREEN */}
        <Scene key = 'info'
          component = {InfoSubject}
          title = 'Subjects'
          renderBackButton={() =>{null}}
          renderLeftButton={()=>{null}} 
        />
        <Scene key ='add_info'
          component = {Add_Subjects}
          title = 'Add'
        />
        <Scene key = 'details'
          component = {Details}
          renderRightButton = {EditTitleRightBtn}
        />
    </Scene>
  </Router>
  );
}

const EditTitleRightBtn = () =>{
  return(
    <View style = {styles.button}>
      <Icon
        size = {25}
        name = 'create'
        iconStyle = {styles.item}
    />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    marginRight : 15
  },
  item : {
    color : '#347deb'
  }
});
