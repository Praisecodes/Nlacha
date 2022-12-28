import { useFonts } from "expo-font";
import OnboardNav from './navigators/onboard_nav';
import Auth_Main from "./navigators/auth_main";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [switchNavs, setSwitchNavs] = useState(false);

  const storeDevice = async () => {
    await AsyncStorage.setItem('opened', 'true');
  }

  useEffect(()=>{
    (async ()=>{
      const val = await AsyncStorage.getItem('opened');
      if(val !== null){
        setSwitchNavs(true);
        console.log(val);
      }
    })();
  },[]);

  const [loaded] = useFonts({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
      Nunito_bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!loaded){
    return null;
  }

  const SwitchNavs = async () => {
    try {
      await storeDevice();
      setSwitchNavs(!switchNavs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    ((switchNavs)?<Auth_Main />:<OnboardNav switchNavs={SwitchNavs} />)
  );
}
