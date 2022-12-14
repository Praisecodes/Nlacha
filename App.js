import Onboarding from './screens/onboarding';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/authscreens/login';
import Signup from './screens/authscreens/signup';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
      Nunito_bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!loaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
