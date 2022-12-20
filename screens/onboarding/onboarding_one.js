import Onboard_Layout from "../../layouts/onboard_layouts";

export default function Onboarding_one({navigation, switchNavs}){
    const moveScreen = () => {
        navigation.navigate('Onboarding_two');
    }

    return(
        <Onboard_Layout section={'one'} actionFunc={moveScreen} switchNavs={switchNavs} />
    )
}
