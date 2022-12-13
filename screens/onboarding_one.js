import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboard_one from "../styles/onboard_one";

export default function Onboarding_one(){
    return(
        <View style={Onboard_one.container}>
            <StatusBar style="dark" translucent={false} backgroundColor="transparent" />
            <ScrollView>
                <View style={Onboard_one.topName}>
                    <Text style={Onboard_one.topText}>
                        Nlacha
                    </Text>
                </View>
                <View style={Onboard_one.imageArea}>

                </View>
            </ScrollView>
        </View>
    )
}