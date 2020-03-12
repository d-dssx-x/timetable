import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';


const TypeBtn = (props) => {
  return(
    <View style = {styles.wrapper}>
      <View style = {styles.row}>
        <View style = {styles.type}>
          <Text style = {styles.desc}>none</Text>
          <TouchableOpacity style = {styles.button} onPress = {()=>props.press(0)}>
            {props.active[0] &&  <ActiveBtn />}
          </TouchableOpacity>
        </View>
        <View style = {styles.type}>
          <Text style = {styles.desc}>exam</Text>
          <TouchableOpacity style = {styles.button} onPress = {()=>props.press(1)}>
            {props.active[1] &&  <ActiveBtn />}
          </TouchableOpacity>
        </View>
        <View style = {styles.type}>
          <Text style = {styles.desc}>credit</Text>
          <TouchableOpacity style = {styles.button} onPress = {()=>props.press(2)}>
            {props.active[2] &&  <ActiveBtn />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const ActiveBtn = () => {
  return(
    <View style = {styles.active}>
      <View style = {styles.point}>
        <View style = {styles.point2}></View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  wrapper : {
    width : '100%',
    height : 55,
    marginTop : 10,
  },
  row : {
    width : '90%',
    height : 55,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginLeft : '5%',
    borderColor : '#e6e6e6',
    borderBottomWidth : 1,
  },
  type : {
    flexDirection : 'column',
    alignItems : 'center',
    width : 50,
    height : 50,
  },
  desc : {
    textAlign : 'center',
    fontSize : 14,
    fontWeight : '200'
  },
  button : {
    width : 30,
    height : 30,
    borderRadius : 15,
    borderColor : '#d1d1d1',
    borderWidth : 1,
    justifyContent : 'center'
  },
  active : {
    width : 25,
    height : 25,
    borderRadius : 12.5,
    backgroundColor : '#d1d1d1',
    marginLeft : 1.5,
    justifyContent : 'center'
  },
  point : {
    width : 20,
    height : 20,
    borderRadius : 10,
    backgroundColor : '#fff',
    marginLeft : 2.5,
    justifyContent : 'center'
  },
  point2 : {
    width : 15,
    height : 15,
    borderRadius : 7.5,
    backgroundColor : '#d1d1d1',
    marginLeft : 2.5
  }

  
})

export default TypeBtn