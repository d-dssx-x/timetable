import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Setting from '../screens/Setting'


export default function Routers() {
  return (
    <Router>
      <Scene key = 'root'>
        <Scene key = 'home'
        component = {Home}
        title = ''
        init/>
        <Scene key = 'edit'
        component = {Edit}
        title = 'Edit'/>
        <Scene key = 'setting'
        component = {Setting}
        title = ''
        navigationBarStyle = {styles.bar}
        titleStyle = {styles.title}
        renderBackButton={() =>{null}}
        renderLeftButton={()=>{null}} />
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
