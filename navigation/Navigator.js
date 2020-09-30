
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';
import SelectTestScreen from "../screen/SelectTestScreen";


const PageNavigation  = createStackNavigator({
    HomeScreen : {
        screen : HomeScreen
    },
    SelectTestScreen:{
        screen : SelectTestScreen
    },
    UserScreen : {
        screen : UserScreen
    }
},{
    defaultNavigationOptions:{
        
    }
})


export default   createAppContainer(PageNavigation);