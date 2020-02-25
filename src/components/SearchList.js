import React from 'react';
import { StyleSheet,View} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import SearchItem from './SearchItem';
import { connect } from 'react-redux';



function SearchList(props) {
    let subjects = props.subjects.map((el,i)=><SearchItem key = {i} index = {i} title = {el.name} chooseTitle = {props.chooseTitle} id = {props.id}/>)
    return (
        <View style = {[styles.container]}>
            <ScrollView>
                {subjects}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height : '100%',
    flex : 1
  },
});

const mapStateToProps = state => {
    return {
        subjects : state.subjects
    }
}

export default connect(mapStateToProps,null)(SearchList)