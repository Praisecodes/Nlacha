import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Homepage, Menupage, FavouritePage, Cart, Profile } from "../screens/mainscreens";
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainscreensNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, tabBarShowLabel: false}}>
                <Tab.Screen
                    name="Home"
                    component={Homepage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<Feather name="home" size={24} color={(focused) ? '#FDC500' : '#000000'} />),
                    }}
                />

                <Tab.Screen
                    name="Menu"
                    component={Menupage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<MaterialIcons name="menu-book" size={24} color={(focused) ? '#FDC500' : '#000000'} />)
                    }}
                />
                    {/* {(props)=><Menupage {...props} />}
                </Tab.Screen> */}
                <Tab.Screen
                    name="Favourites"
                    component={FavouritePage}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<MaterialIcons name={(focused) ? 'favorite' : "favorite-outline"} size={24} color={(focused) ? '#FDC500' : '#000000'} />)
                    }}
                />

                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<Feather name='shopping-cart' size={24} color={(focused) ? '#FDC500' : '#000000'} />)
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (<FontAwesome5 name='user-circle' size={24} color={(focused) ? '#FDC500' : '#000000'} />)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}