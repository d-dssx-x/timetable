//Router between screens
import React from 'react';
import { StyleSheet} from 'react-native';
import { Router, Scene ,Actions } from 'react-native-router-flux';
/*Home */
import Home from '../screens/Home/'
import Edit from '../screens/Home/Edit';
import Add from '../screens/Home/Add';
import AddDeleteHome from '../screens/Home/AddDeleteHome';
/*Settings */
import Settings from '../screens/Settings/'
/*Tasks */
import Tasks from '../screens/Tasks/'
/*Subjects Info*/
import InfoSubject from '../screens/Info/';
import Add_Subjects from '../screens/Info/Add'


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
          init
        />
        <Scene key = 'edit'
          component = {Edit}
          title = 'Edit'/>
        <Scene key = 'addDeleteHome'
          component = {AddDeleteHome}
          title = ''
          renderBackButton={() =>{null}}
          renderLeftButton={()=>{null}} 
          />
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
    </Scene>
  </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
