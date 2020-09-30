import React from 'react'
import { StyleSheet, View, Text, ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native'
import HeaderLogo from '../components/UI/HeaderLogo'
import UserLogo from '../components/UI/UserLogo'
import {data} from "../data/data";
import HomeScreenComponent from '../components/Screen/HomeScreenComponent';
import TestSearchComponent from '../components/Screen/TestSearchComponent';


const HomeScreen = (props) => {

    

    const list = data.map((item, index) => {
        return (
            <HomeScreenComponent 
                key={item.id}
                id={item.id}
                image={item.imageUrl}
                title={item.title}
                onSelect={() => {
                    props.navigation.navigate({routeName:'SelectTestScreen', params:{
                        testId:item.id,
                        testTitle:item.title
                    }})
                }}
            />
      
        )
    })

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <View style={styles.container}>
                    <UserLogo />

                    <View style={styles.header}>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>Select a Test category</Text>
                        </View>

                        <TestSearchComponent />      
                    </View>
                    
                    <View style={styles.list}>
                        {list}
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}


HomeScreen.navigationOptions = {
        headerTitle: () => <HeaderLogo />
}


export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#E5E5E5'
    },
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
        lineHeight:25,
        letterSpacing:0.5,

    },
    list:{
        width:'85%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    }
})
