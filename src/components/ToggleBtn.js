import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

const selectSize = (l) => {
  switch (l) {
    case 2 : return {width : '55%'}
    case 3 : return {width : '80%'}
  }
}
const selectMargin = (l) => {
  switch (l) {
    case 2 : return {marginLeft : '22.5%'}
    case 3 : return {marginLeft : '10%'}
  }
}

function ToggleBtn(props){
  return(
    <View style = {styles.wrapper}>
          <View style = {styles.border}>
            <View style = {[styles.row,selectSize(props.name.length),selectMargin(props.name.length)]}>
              {props.name[0] !== undefined &&
                <TouchableOpacity style = {[styles.button,props.active[0]]} onPress = {()=>{props.press(0)}}>
                  <Text style = {styles.text}>{props.name[0]}</Text>
                </TouchableOpacity>}
              {props.name[1] !== undefined &&
                <TouchableOpacity style = {[styles.button,props.active[1]]} onPress = {()=>{props.press(1)}}>
                  <Text style = {styles.text}>{props.name[1]}</Text>
                </TouchableOpacity>}
              {props.name[2] !== undefined && 
                <TouchableOpacity style = {[styles.button,props.active[2]]} onPress = {()=>{props.press(2)}}>
                  <Text style = {styles.text}>{props.name[2]}</Text>
                </TouchableOpacity>}
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
export default ToggleBtn