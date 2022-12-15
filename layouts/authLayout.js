import { View, Text, TouchableWithoutFeedback } from "react-native";
import AuthStyle from "../styles/authstyle";

export default function AuthLayout({children, page, switchToLogin, switchToSignup}){
    return (
        <View style={AuthStyle.authContainer}>
            <View style={AuthStyle.topButtons}>
                <TouchableWithoutFeedback 
                    onPress={switchToLogin}
                >
                    <Text style={[AuthStyle.topTexts, (page=="Login")?AuthStyle.selectedBorder:AuthStyle.usSelectedBorder]}>
                        Login
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                    onPress={switchToSignup}
                >
                    <Text style={[AuthStyle.topTexts, AuthStyle.toTheRight, (page=="Signup")?AuthStyle.selectedBorder:AuthStyle.usSelectedBorder]}>
                        Signup
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {((page=="Login")?<Text style={AuthStyle.welcomeBack}>Hello Champ, Welcome Back</Text>:"")}
            <View style={AuthStyle.mainContent}>
                {children}
            </View>
            <View style={AuthStyle.buttonContainer}>
                <TouchableWithoutFeedback>
                    <Text style={AuthStyle.button}>
                        {(page=="Login")?'Log in':'Create Account'}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}