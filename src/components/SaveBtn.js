import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


const SaveBtn = (props) =>{
    return(
        <View>
            <TouchableOpacity style = {styles.button} onPress = {props.press}>
                <Text style = {styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
  button : {
      marginTop : 30,
      width : '90%',
      marginLeft : '5%',
      height : 60,
      justifyContent : 'center',
      alignItems : 'center',
      borderColor : '#e6e6e6',
      borderWidth : 1,
      borderRadius : 20,
      marginBottom : 50
  },
  buttonText : {
      color : '#999999',
      fontSize : 30,
  }
});


export default SaveBtn