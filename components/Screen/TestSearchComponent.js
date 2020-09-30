import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const TestSearchComponent = (props) => {
    return (

        <View style={styles.searchBox}>
            <View>
                <Ionicons name="ios-search" size={24} style={{color:'#D7D7F4',fontSize:24}} />
            </View>
            <View>
                <TextInput style={styles.textarea} placeholder="Type your Test Name here" defaultValue={props.inputValue} />
            </View>
            <View>
                <Ionicons name="ios-arrow-down" style={{color:'#D7D7F4', fontSize:24}} />
            </View>
        </View>                
    
    )
}

export default TestSearchComponent

const styles = StyleSheet.create({
    header:{
        width:'85%',
        marginVertical:20,
        height:90,
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    titleBox:{
        justifyContent:'space-around',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        lineHeight:32,
        letterSpacing:0.5,

    },
    searchBox:{
        width:'100%',
        backgroundColor:'#fff',
        height:50,
        borderWidth:1,
        borderColor:'#D7D7F4',
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    textarea:{
        width:250,
        fontSize:13,
        lineHeight:23.87,
        color:'#303030'
    },
})
