import { useFonts } from "expo-font";
import OnboardNav from './navigators/onboard_nav';
import Auth_Main from "./navigators/auth_main";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  // const StoreValue = async () => {
  //   try {
  //     await AsyncStorage.setItem('some_key', 'This Key');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getValue = async () => {
  //   try {
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const [opened, setOpened] = useState(getValue());
  const [switchNavs, setSwitchNavs] = useState(false);

  const [loaded] = useFonts({
      Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
      Nunito_bold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if(!loaded){
    return null;
  }

  const SwitchNavs = async () => {
    // await StoreValue();
    // console.log(opened);
    setSwitchNavs(!switchNavs);
  }

  return (
    ((switchNavs)?<Auth_Main />:<OnboardNav switchNavs={SwitchNavs} />)
  );
}
