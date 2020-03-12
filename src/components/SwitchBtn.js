import React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Switch } from 'react-native-gesture-handler'


const SwitchBtn = (props) => {
    return(
        <View style = {styles.wrapper}>
            <View style = {styles.row}>
                <View style = {styles.left}>
                    <Text style = {styles.text}>{props.text}</Text>
                </View>
                <View style = {styles.right}>
                    <Switch value = {props.value} onValueChange = {()=>props.onValueChange(props.value)}/>
                </View>
            </View>
        </View>
    )
}



export default SwitchBtn


const styles = StyleSheet.create({
    wrapper : {
        width : '100%',
        height : 50
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
        width : '50%',
        height : 50,
        justifyContent : 'center'
    },
    right : {
        width : '50%',
        height : 50,
        alignItems : 'flex-end',
        justifyContent : 'center'
    },
    text : {
        fontSize : 20,
        fontWeight : '200'
    }
}
)