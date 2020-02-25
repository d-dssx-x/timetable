import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'




function SearchItem(props) {
    return (
            <View>
                <TouchableOpacity style = {styles.wrapper} onPress = {()=>{props.chooseTitle(props.id,props.index)}}>
                    <View style = {styles.row}>
                            <Text style = {styles.text}>{props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
    )
}




export default SearchItem


const styles = StyleSheet.create({
  wrapper : {
    backgroundColor: '#fff',
    width : '100%',
    height : 40,
  },
  row : {
      width : '90%',
      height : 40,
      marginLeft : '5%',
      borderBottomWidth : 1,
      borderBottomColor : '#e6e6e6',
      justifyContent : 'center'
  },
  text : {
      fontSize : 20,
      fontWeight : '200',
  }
  
});
