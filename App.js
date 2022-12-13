import Onboarding_one from './screens/onboarding_one';
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
  });

  if(!loaded){
    return null;
  }

  return (
    <Onboarding_one />
  );
}
