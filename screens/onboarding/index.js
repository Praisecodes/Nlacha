import Onboarding_one from "./onboarding_one";
import Onboarding_two from "./onboarding_two";
import { useState } from "react";

export default function Onboarding({navigation}){
    const [switchScreen, setSwitch] = useState(false);

    const moveToLogin = () => {
        navigation.navigate('Login');
    }
    const moveToSignup = () => {
        navigation.navigate('Signup');
    }

    const changeScreen = () =>{
        setSwitch(!switchScreen);
    }

    return (
        ((switchScreen)?<Onboarding_two actionFunc={changeScreen} moveToSignup={moveToSignup} moveToLogin={moveToLogin} />:<Onboarding_one actionFunc={changeScreen} moveToLogin={moveToLogin} />)
    )
}
