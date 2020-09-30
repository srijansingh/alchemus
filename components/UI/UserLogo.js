import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const UserLogo = () => {
    const newLocal = '../../assets/elements/user.png'
    return (
        <View style={styles.box}>
                <View style={styles.imagebox}>
                    <Image 
                        source={require(newLocal)}
                        style={styles.userImage}
                    />
                </View>
            </View>
    )
}

export default UserLogo

const styles = StyleSheet.create({
    box:{
        height:110,
        width:'100%',
        backgroundColor:'#87E0E1',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100
    },
    imagebox:{
        height:94,
        width:94,
        borderRadius:50,
        overflow:'hidden'

    },
    image:{
        height:'100%',
        width:'100%'
    }
})
