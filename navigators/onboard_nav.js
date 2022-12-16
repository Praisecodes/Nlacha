import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding_one from "../screens/onboarding/onboarding_one";
import Onboarding_two from "../screens/onboarding/onboarding_two";

const Stack = createNativeStackNavigator();

export default function OnboardNav({switchNavs}){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Onboarding_one" component={Onboarding_one} />
                <Stack.Screen name="Onboarding_two">
                    {(props)=><Onboarding_two {...props} switchNavs={switchNavs} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}