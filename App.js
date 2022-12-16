import { useFonts } from "expo-font";
import OnboardNav from './navigators/onboard_nav';
import AuthNav from "./navigators/auth_nav";
import { useState } from "react";

export default function App() {
  const [switchNavs, setSwitchNavs] = useState(false);

  const [loaded] = useFonts({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
      Nunito_bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!loaded){
    return null;
  }

  const SwitchNavs = () => {
    setSwitchNavs(!switchNavs);
  }

  return (
    ((switchNavs)?<AuthNav />:<OnboardNav switchNavs={SwitchNavs} />)
  );
}
