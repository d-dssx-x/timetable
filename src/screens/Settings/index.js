import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import TabBar from '../../components/TabBar';




function Settings(props) {
    return (
        <View style={styles.container}>
            <TabBar id = {props.id || 2}/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  empty : {
    width : '100%',
    height : 59
  },
  tabBar : {
    width : '100%',
    height : 60,
    borderColor :  '#c9c9c9',
    borderTopWidth : 1,
    backgroundColor :'#ebebeb',
    flexDirection : 'row'
  },
  button : {
    width : 40,
    height : 40,
    color : '#fff',
    backgroundColor :'#ebebeb',
  },
});


export default Settings