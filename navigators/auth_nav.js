import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/authscreens/login";
import Signup from "../screens/authscreens/signup";

const Tab = createBottomTabNavigator();

export default function AuthNav({changeFocus}){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
                {/* <Tab.Screen name="Login" component={Login} /> */}
                <Tab.Screen name="Login">
                    {(props)=><Login {...props} changeFocus={changeFocus} />}
                </Tab.Screen>
                <Tab.Screen name="Signup" component={Signup} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}