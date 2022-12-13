import Onboarding_one from './screens/onboarding_one';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';

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
      <Onboarding_one />
    </NavigationContainer>
  );
}
