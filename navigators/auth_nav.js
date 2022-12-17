import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/authscreens/login";
import Signup from "../screens/authscreens/signup";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthNav(){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {display: 'none'}}}>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}