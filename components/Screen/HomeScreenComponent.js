import React from 'react'
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native'

const HomeScreenComponent = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onSelect}>
        <View style={styles.items} key={props.id}>
            <View style={styles.itemImage}>
                <Image 
                    source={props.image}
                    style={styles.url}
                />
            </View>
            <View style={styles.itemTitle}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </View>
        </TouchableNativeFeedback>
    )
}

export default HomeScreenComponent

const styles = StyleSheet.create({
    items:{
        elevation:2,
        backgroundColor:'white',
        height:150,
        width:150,
        borderRadius:5,
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10,
        overflow:'hidden'
        
    },
    itemImage:{
        height:88,
        width:88,
        overflow:'hidden'

    },
    url:{
        height:'100%',
        width:'100%'
    },
    text:{
        fontSize:14,
        fontWeight:'500',
        lineHeight:25
    }

})
