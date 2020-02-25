import React from 'react';
import { StyleSheet, View} from 'react-native';
import TabBar from '../../components/TabBar';




function Tasks(props) {
    return (
        <View style={styles.container}>
            <TabBar id = {props.id || 1}/>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex : 1,
  },
});


export default Tasks