import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, ScrollView, Image, CheckBox, Dimensions } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import TestSearchComponent from '../components/Screen/TestSearchComponent'
import HeaderLogo from '../components/UI/HeaderLogo'
import UserLogo from '../components/UI/UserLogo'
import { Ionicons } from '@expo/vector-icons';
import color from '../components/Contants/color';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { RadioButton } from 'react-native-paper';
const SelectTestScreen = (props) => {

    const testId = props.navigation.getParam('testId');
    const testTitle = props.navigation.getParam('testTitle');
    const [step, setStep] = useState(1);
    const [isSelected, setSelection]=useState(false)

    const nextStep = () => {
        setStep(step + 1)
    }
  
    switch (step) {
        case 1:
            return (
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                            <UserLogo />

                            <View style={styles.header}>
                                <TestSearchComponent inputValue={testTitle} />   
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>Please select the Test(s)</Text>
                                </View>
                            </View>

                            <View style={styles.testList}>
                                <View style={styles.testItems}>
                                    <View style={styles.testView}>
                                        <View style={styles.testImage}>
                                            <Image 
                                                source={require('../assets/elements/small.png')}
                                                style={{height:22, width:22}}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.testText}>Dental</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <CheckBox 
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            tintColors={{ true: color.primary, false: color.accent }}
                                            
                                        />
                                    </View>
                                </View>
                                <View style={styles.divider}></View>
                            </View>
                        </ScrollView>

                        <TouchableNativeFeedback onPress={nextStep}>
                            <View style={styles.footer}>
                                    <Text style={styles.buttonText}>Next</Text>
                            </View>
                        </TouchableNativeFeedback>
        
                    </View> 
                </TouchableWithoutFeedback>
            )
        case 2:
            return(
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                   
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                            <UserLogo />

                            <View style={styles.header}>
                                <View style={styles.titleBox}>
                                    <Text style={ styles.center}>Test A + 3 more</Text>
                                </View>
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>Choose a center</Text>
                                </View>
                            </View>


                            <View style={styles.testList}>
                                <View style={styles.centerItems}>
                                    <View style={styles.testView}>
                                        <View style={styles.testImage}>
                                            <Image 
                                                source={require('../assets/elements/small.png')}
                                                style={{height:22, width:22}}
                                            />
                                        </View>
                                        <View style={styles.centerDetail}>
                                           <View>
                                                <Text style={styles.testText}>Dental</Text>
                                           </View>
                                           <View>
                                                <Text style={styles.testTextLight}>2km away </Text>
                                           </View>
                                           <View>
                                                <Text style={styles.testTextColor}>Tests: Dental check-up, Dental Consultation,
ECG For Alkem,  Lateral ceph-Xray, Typohoid vaccine not available</Text>
                                           </View>
                                        </View>
                                    </View>
                                    <View>
                                        <RadioButton
                                            value="first"
                                            color={color.primary}
                                            status='checked'
                                            
                                        />
                                    </View>
                                </View>
                                <View style={styles.divider}></View>
                            </View>

                        </ScrollView>
                        
                        <TouchableNativeFeedback onPress={nextStep}>
                            <View style={styles.footer}>
                               
                                    <Text style={styles.buttonText}>Next</Text>
                                
                            </View>
                        </TouchableNativeFeedback>
                        
                       
                    </View>
                    
                </TouchableWithoutFeedback>
            )    
        case 3:
            return (
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                   
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                            <UserLogo />

                            <View style={styles.header}>
                                <View style={styles.titleBox}>
                                    <Text style={ styles.visit}>You could either choose Centre visit or Home visit based on your preference & convenience</Text>
                                </View>
                                <View style={styles.titleBox}>
                                    <Text style={styles.title}>Center / Home visit?</Text>
                                </View>
                            </View>

                            <View style={styles.testList}>
                                <View style={styles.visitItems}>
                                    <View style={styles.testView}>
                                        <View style={styles.testImage}>
                                            <Image 
                                                source={require('../assets/elements/small.png')}
                                                style={{height:22, width:22}}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.testText}>Dental</Text>
                                        </View>
                                    </View>
                                    <View style={styles.visitBox}>
                                        <View style={styles.radio}>
                                            <RadioButton
                                                value="first"
                                                color={color.primary}
                                                status='checked'
                                                
                                            />
                                            <Text>Center Visit</Text>
                                        </View>

                                        <View style={styles.radio}>
                                            <RadioButton
                                                value="first"
                                                color={color.primary}
                                                status='unchecked'
                                                
                                            />
                                            <Text>Home Visit</Text>
                                        </View>
                                    </View>
                                </View>

                            
                                <View style={styles.divider}></View>
                            </View>

                        </ScrollView>
                        
                        <TouchableNativeFeedback onPress={nextStep}>
                            <View style={styles.footer}>
                                <Text style={styles.buttonText}>Next</Text>
                            </View>
                        </TouchableNativeFeedback>
                        
                       
                    </View>
                    
                </TouchableWithoutFeedback>
            ) 
        case 4:
            return(
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                   
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                            <UserLogo />

                            <View style={styles.header}>
                                <View style={styles.titleBox}>
                                    <Text style={ styles.center}>Dental check-up</Text>
                                </View>
                                <View style={styles.titleBox}>
                                    <View style={{marginRight:10}}>
                                        <Ionicons name="ios-calendar" style={{fontSize:24, color:'#913E8E'}} />
                                    </View>
                                    <View>
                                        <Text style={styles.title}>Appointment date</Text>
                                    </View>
                                    
                                    
                                </View>
                            </View>

                           
                                <Calendar 
                                    style={{
                                        borderWidth: 0,
                                        borderColor: 'gray',
                                       
                                        width:Dimensions.get('window').width
                                      }}
                                      onDayPress={(day) => {console.log('selected day', day)}}
                                      markedDates={{
                                        '2020-09-21': {selected: true,  selectedColor: color.primary},
                                        
                                      }}
                                      theme={{
                                        backgroundColor: '#E5E5E5',
                                        calendarBackground: '#E5E5E5',
                                        textSectionTitleColor:  color.primary,
                                        textSectionTitleDisabledColor: color.primary,
                                        selectedDayBackgroundColor:color.primary,
                                        selectedDayTextColor: '#E5E5E5',
                                        todayTextColor: '#2d4150',
                                        dayTextColor: '#2d4150',
                                        textDisabledColor: '#d9e1e8',
                                        arrowColor: 'black',
                                        disabledArrowColor: '#d9e1e8',
                                        monthTextColor: 'black',
                                        indicatorColor: 'black',
                                        textDayFontWeight: '300',
                                        textMonthFontWeight: 'bold',
                                        textDayHeaderFontWeight: '300',
                                        textDayFontSize: 16,
                                        textMonthFontSize: 16,
                                        textDayHeaderFontSize: 16
                                      }}
                                />
                           

                        </ScrollView>
                        
                        <TouchableNativeFeedback onPress={nextStep}>
                            <View style={styles.footer}>
                               
                                    <Text style={styles.buttonText}>Next</Text>
                                
                            </View>
                        </TouchableNativeFeedback>
                        
                       
                    </View>
                    
                </TouchableWithoutFeedback>
            ) 
        case 5:
            return (
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                   
                    <View style={{flex:1, backgroundColor:'white'}}>
                        <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                            <UserLogo />

                            <View style={styles.header}>
                                <View style={styles.header}>
                                    <View style={styles.titleBox}>
                                        <Text style={styles.title}>Your Booking Summary</Text>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                        
                        <TouchableNativeFeedback>
                            <View style={styles.footer}>
                               
                                    <Text style={styles.buttonText}>Finish</Text>
                                
                            </View>
                        </TouchableNativeFeedback>
                        
                       
                    </View>
                    
                </TouchableWithoutFeedback>
            )      
        default:
            break;
    }
    
}

SelectTestScreen.navigationOptions = {
    headerTitle: () => <HeaderLogo />
}

export default SelectTestScreen

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#E5E5E5',
    },
    header:{
        width:'85%',
        marginVertical:15,
       
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    titleBox:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:5
       
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        lineHeight:32,
        letterSpacing:0.5,
        color:'#000'

    },
    center:{
        fontSize:18,
        fontWeight:'bold',
        lineHeight:20,
        letterSpacing:0.16,
        color:color.primary

    },
    visit:{
        fontSize:13,
        fontWeight:'normal',
        lineHeight:20,
        letterSpacing:0.16,
        color:'#000000',
        textAlign:'center'
    },
    footer:{
        height:60 ,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:color.primary
        
    },
    buttonText:{
        color:'white',
        fontSize:16,
        lineHeight:22
    },
    testList:{
        width:'100%',
        marginVertical:10
    },
    testItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:65,
        paddingHorizontal:30,
        borderTopWidth:1,
        // borderBottomWidth:1,
        borderColor:'#cccccc',
    },
    divider:{
        borderTopWidth:1,
        borderColor:'#cccccc'
    },
    testView:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    testImage:{
        marginRight:15
    },
    testText:{
        fontSize:16,
        fontWeight:'bold',
        lineHeight:20,
        letterSpacing:0.16,
    },
    centerItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        minHeight:100,
        paddingHorizontal:20,
        borderTopWidth:1,
        // borderBottomWidth:1,
        borderColor:'#cccccc',
        paddingVertical:10
    },
    centerDetail:{
        flexDirection:'column'
    },
    testTextLight:{
        fontSize:13,
        fontWeight:'normal',
        color:'#727376',
        lineHeight:20,
        letterSpacing:0.16,
    },
    testTextColor:{
        fontSize:13,
        fontWeight:'normal',
        color:color.primary,
        lineHeight:20,
        letterSpacing:0.16,
    },
    visitItems:{
        justifyContent:'space-between',
        alignItems:'center',
        minHeight:90 ,
        paddingHorizontal:20,
        borderTopWidth:1,
        // borderBottomWidth:1,
        borderColor:'#cccccc',
        paddingVertical:10
    },
    visitBox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    radio:{
        flexDirection:'row',
        alignItems:'center'
    }
})
