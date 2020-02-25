import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';



export default function Edit(props) {
    let stlC = [styles.circle,{backgroundColor:props.color||'#fff'}]
    let stlT = [styles.text]
    if(props.active && props.type === 'DAY'){
        stlC.push({backgroundColor : '#454545'})
        stlT.push({color:'#fff'})
    }
    if(props.active && props.type === 'COLOR'){
        stlC.push({borderWidth : 3, borderColor : '#999999'})
    }
    return (
        <TouchableOpacity style = {stlC} onPress = {()=>{props.press(props.id)}}>
            <Text style = {stlT}>{props.text}</Text>
        </TouchableOpacity>
                
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height : '100%'
  },
  weekWrap : {
      flexDirection : 'row',
      marginLeft : '5%'
  },
  circle : {
      width : 40,
      height : 40,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems : "center",
      marginRight:'2.8%',
      borderWidth : 1,
      borderColor : '#e6e6e6',
      marginTop : 5,
  },

});
