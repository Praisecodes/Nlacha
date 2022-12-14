import Onboard_Layout from "../../layouts/onboard_layouts";

export default function Onboarding_one({actionFunc, moveToLogin}){
    return(
        <Onboard_Layout section={'one'} actionFunc={actionFunc} moveToLogin={moveToLogin} />
    )
}