import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PlusBtn from '../PlusBtn'


const AddButton = (props) => {
  return(
    <TouchableOpacity style = {styles.wrapper}>
      <View style = {styles.row}>
        <PlusBtn size = {{width : 30,height : 30}} font = {{fontSize : 35}}/>
        <View style = {styles.left}>
          <Text style = {styles.text}>Add subject</Text>
        </View>
      </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
  wrapper : {
    width : '100%',
    height : 50,
  },
  row : {
    width : '90%',
    height : 50,
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderColor : '#e6e6e6',
    flexDirection : 'row',
  },
  left : {
    width : '100%',
    height : 50,
    justifyContent : 'center'
  },
  text : {
    fontSize : 20,
    fontWeight : '200',
  },
});

export default AddButton