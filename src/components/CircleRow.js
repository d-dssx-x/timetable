import React from 'react';
import { StyleSheet, View} from 'react-native';
import Circle from '../components/Circle';


function CircleRow(props) {
    return(
        <View style = {styles.wrapper}>
            <View style = {styles.row}>
                <Circle text = {props.text[0]} id = {0} type = {props.type} active = {props.active[0]} press = {props.press} color = {props.color[0]}/>
                <Circle text = {props.text[1]} id = {1} type = {props.type} active = {props.active[1]} press = {props.press} color = {props.color[1]}/>
                <Circle text = {props.text[2]} id = {2} type = {props.type} active = {props.active[2]} press = {props.press} color = {props.color[2]}/>
                <Circle text = {props.text[3]} id = {3} type = {props.type} active = {props.active[3]} press = {props.press} color = {props.color[3]}/>
                <Circle text = {props.text[4]} id = {4} type = {props.type} active = {props.active[4]} press = {props.press} color = {props.color[4]}/>
                <Circle text = {props.text[5]} id = {5} type = {props.type} active = {props.active[5]} press = {props.press} color = {props.color[5]}/>
                <Circle text = {props.text[6]} id = {6} type = {props.type} active = {props.active[6]} press = {props.press} color = {props.color[6]}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  wrapper : {
      height : 60,
      marginTop : 10,
  },
  row : {
    height : 60,
    flexDirection : 'row',
    width : '90%',
    marginLeft : '5%',
    borderBottomWidth : 1,
    borderBottomColor : '#e6e6e6'
  }
});
export default CircleRow