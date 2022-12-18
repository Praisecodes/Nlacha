import AuthNav from "./auth_nav";
import MainscreensNav from "./mainscreens_nav";
import { useState } from "react";

export default function Auth_Main(){
    const [switchToMain, setSwitchToMain] = useState(false);

    const changeFocus = () => {
        setSwitchToMain(!switchToMain);
    }

    return (
        ((switchToMain)?<MainscreensNav />:<AuthNav changeFocus={changeFocus}/>)
    )
}