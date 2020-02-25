import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';


function SwitchButton(props){
  return(
    <View style = {styles.wrapper}>
          <View style = {styles.border}>
            <View style = {styles.row}>
              <TouchableOpacity style = {[styles.button,props.active[0]]} onPress = {()=>{props.press(0)}}>
                <Text style = {styles.text}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.button,props.active[1]]} onPress = {()=>{props.press(1)}}>
                <Text style = {styles.text}>Exam</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.button,props.active[2]]} onPress = {()=>{props.press(2)}}>
                <Text style = {styles.text}>Credit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
  )
}



const styles = StyleSheet.create({
  wrapper : {
    width : '100%',
    height : 40,
    marginTop : 10
  },
  border : {
    width : '90%',
    height : 40,
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
  },  
  row : {
    width : '80%',
    height : 30,
    marginLeft : '10%',
    marginBottom : 10,
    flexDirection : 'row',
    justifyContent : 'space-around',
    backgroundColor : '#e6e6e6',
    borderRadius : 10
  },
  button : {
    marginTop : 2.5,
    width : 80,
    height : 25,
    borderRadius : 10,
    justifyContent : 'center',
  },
  text : {
    fontSize : 18,
    textAlign : 'center',
    fontWeight : '200'
  },
  active : {
    backgroundColor : '#fff',
  }
});
export default SwitchButton