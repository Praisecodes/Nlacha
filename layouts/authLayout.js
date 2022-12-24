import { View, Text, TouchableWithoutFeedback, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import AuthStyle from "../styles/authstyle";
import { useState, useEffect } from "react";

export default function AuthLayout({ children, page, switchToLogin, switchToSignup, checkLogin }) {
    const Google = require('../assets/images/google.png');
    const Facebook = require('../assets/images/facebook.png');

    // const Login = () => {
    //     if(checkLogin()){
    //         changeFocus();
    //     }
    //     else{
    //         alert('An Error has occured, try typing your details again.\nIf the problem persists, contact developer');
    //     }
    //     // checkLogin();
    // }

    return (
        <ScrollView>
            <View style={AuthStyle.authContainer}>
                <StatusBar style="dark" translucent={false} backgroundColor="transparent" />

                <View style={AuthStyle.topButtons}>
                    <TouchableWithoutFeedback
                        onPress={switchToLogin}
                    >
                        <Text style={[AuthStyle.topTexts, (page == "Login") ? AuthStyle.selectedBorder : AuthStyle.usSelectedBorder]}>
                            Login
                        </Text>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPress={switchToSignup}
                    >
                        <Text style={[AuthStyle.topTexts, AuthStyle.toTheRight, (page == "Signup") ? AuthStyle.selectedBorder : AuthStyle.usSelectedBorder]}>
                            Signup
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
                {((page == "Login") ? <Text style={AuthStyle.welcomeBack}>Hello Champ, Welcome Back</Text> : "")}
                <View style={AuthStyle.mainContent}>
                    {children}
                </View>
                <View style={AuthStyle.buttonContainer}>
                    <TouchableWithoutFeedback onPress={() => {
                        ((page=="Login")?checkLogin():null)
                    }}>
                        <Text 
                            style={AuthStyle.button}
                        >
                            {(page == "Login") ? 'Log in' : 'Create Account'}
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
                <Text style={{ fontFamily: 'Nunito_bold', color: '#1E0C4A', paddingVertical: 15, fontSize: 14, }}>
                    OR
                </Text>

                <View style={AuthStyle.otherOptions}>
                    <Text style={AuthStyle.texts}>
                        Sign in using
                    </Text>
                    <View style={AuthStyle.imageView}>
                        <Image source={Google} style={AuthStyle.image} />
                        <Image source={Facebook} style={AuthStyle.image} />
                    </View>
                </View>
                {(page == "Login") ? (<TouchableWithoutFeedback>
                    <Text style={AuthStyle.texts}>
                        Don't Have An Account?{' '}
                        <Text style={{ color: '#FDC500' }}>Signup</Text>
                    </Text>
                </TouchableWithoutFeedback>) : ''}
            </View>
        </ScrollView>
    )
}