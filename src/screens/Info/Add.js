import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Form from '../../components/Form';


const Add = (props) => {
  return(
      <View style = {styles.container}>
         <Form text = 'Subject'/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
})

export default Add