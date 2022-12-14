import Onboarding_one from "./onboarding_one";
import Onboarding_two from "./onboarding_two";
import { useState } from "react";

export default function Onboarding(){
    const [switchScreen, setSwitch] = useState(false);

    const changeScreen = () =>{
        setSwitch(!switchScreen);
    }

    return (
        ((switchScreen)?<Onboarding_two actionFunc={changeScreen} />:<Onboarding_one actionFunc={changeScreen} />)
    )
}
