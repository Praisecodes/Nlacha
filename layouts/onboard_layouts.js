import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import Onboard_one from "../styles/onboard_one";

export default function Onboard_Layout({section}){
    const displayImg = require('../assets/images/onboardone_image.png');
    const displayImg2 = require('../assets/images/onboardtwo_image.png');

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
                    <Image source={(section=="two")?displayImg2:displayImg} style={Onboard_one.image} />
                    <Text style={Onboard_one.lowerText}>
                        {(section=='two')?'Fast Delivery':'Tasty Food At Your Finger Tips'}
                    </Text>
                </View>
                <View style={Onboard_one.buttonsView}>
                    <TouchableWithoutFeedback>
                        <Text style={Onboard_one.buttonContinue}>
                            {(section=="one")?'Continue':'Sign up'}
                        </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Text style={Onboard_one.buttonSignin}>
                            Sign In
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </View>
    )
}