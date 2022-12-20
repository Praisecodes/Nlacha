import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding_one from "../screens/onboarding/onboarding_one";
import Onboarding_two from "../screens/onboarding/onboarding_two";

const Tab = createBottomTabNavigator();

export default function OnboardNav({switchNavs}){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false,tabBarStyle: {display: 'none'}}}>
                <Tab.Screen name="Onboarding_one">
                    {(props)=><Onboarding_one {...props} switchNavs={switchNavs} />}
                </Tab.Screen>
                <Tab.Screen name="Onboarding_two">
                    {(props)=><Onboarding_two {...props} switchNavs={switchNavs} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}