import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Add from '../screens/Add';
import AddDeleteHome from '../screens/AddDeleteHome';


export default function Routers() {
  return (
    <Router>
      <Scene key = 'root'>
        <Scene key = 'home'
        component = {Home}
        title = ''
        renderBackButton={() =>{null}}
        renderLeftButton={()=>{null}} 
        init/>
        <Scene key = 'edit'
        component = {Edit}
        title = 'Edit'/>
        <Scene key = 'addDeleteHome'
        component = {AddDeleteHome}
        title = ''
        navigationBarStyle = {styles.bar}
        titleStyle = {styles.title}
        renderBackButton={() =>{null}}
        renderLeftButton={()=>{null}} />
        <Scene key = 'add'
        component = {Add}
        title = "Add"/>
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
