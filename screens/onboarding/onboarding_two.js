import Onboard_Layout from "../../layouts/onboard_layouts";

export default function Onboarding_two({actionFunc, moveToLogin, moveToSignup}){
    return (
        <Onboard_Layout section={'two'} actionFunc={actionFunc} moveToLogin={moveToLogin} moveToSignup={moveToSignup} />
    )
}