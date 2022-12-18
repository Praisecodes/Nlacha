import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Homepage, Menupage, FavouritePage } from "../screens/mainscreens";
import {Feather, MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainscreensNav(){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontFamily: 'Nunito_bold'}}}>
                <Tab.Screen 
                    name="Home" 
                    component={Homepage} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ()=>(<Feather name="home" size={24} color='#000000' />),
                    }}
                />

                <Tab.Screen 
                    name="Menu" 
                    component={Menupage} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ()=>(<MaterialIcons name="menu-book" size={24} color="#000000" />)
                    }} 
                />
                <Tab.Screen 
                    name="Favourites" 
                    component={FavouritePage} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ()=>(<MaterialIcons name="favorite-outline" size={24} color="#000000" />)
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}