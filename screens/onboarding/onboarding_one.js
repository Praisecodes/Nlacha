import Onboard_Layout from "../../layouts/onboard_layouts";

export default function Onboarding_one({navigation}){
    const moveScreen = () => {
        navigation.navigate('Onboarding_two');
    }

    return(
        <Onboard_Layout section={'one'} actionFunc={moveScreen} />
    )
}
