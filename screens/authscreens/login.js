import { Text, TextInput, TouchableWithoutFeedback } from "react-native"
import AuthLayout from "../../layouts/authLayout"
import Forms from "../../styles/forms";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation, changeFocus}){
    const switchToSignup = () => {
        navigation.navigate('Signup');
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const SetJWT = async (jwtToken) => {
        await AsyncStorage.setItem('user_token', jwtToken);
    }

    const checkLogin = () => {
        fetch('https://nlacha.herokuapp.com/login.php',{
            method: 'POST',
            headers: 'Content-Type: application/json',
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then(res=>{
            switch(res.status){
                case 400:
                    alert("Invalid Details");
                    break;
                case 404:
                    alert("No User Found!");
                    break;
                case 500:
                    alert("Internal Server Error!");
                    break;
                default:
                    return res.json();
            }
        })
        .then((data)=>{
            if(!data) return null;
            const jwt = data.jwt;
            SetJWT(jwt);
            changeFocus();
        })
        .catch((e)=>{console.log(e)});
    }

    return (
        
        <AuthLayout page={'Login'} switchToSignup={switchToSignup} checkLogin={checkLogin}>
            <Text style={Forms.fieldsText}>
                Username
            </Text>
            <TextInput 
                style={Forms.inputFields} 
                returnKeyType='done' 
                placeholder={'Enter Your Username'} 
                value={username}
                onChangeText={(newUsername)=>{
                    setUsername(newUsername)
                }}
            />

            <Text style={Forms.fieldsText}>
                Password
            </Text>
            <TextInput 
                style={Forms.inputFields} 
                secureTextEntry={true} 
                returnKeyType='go' 
                placeholder={'Enter Password'} 
                value={password}
                onChangeText={(newPassword)=>{
                    setPassword(newPassword);
                }}
            />

            <TouchableWithoutFeedback>
                <Text style={Forms.forgot}>
                    Forgotten Password?
                </Text>
            </TouchableWithoutFeedback>
        </AuthLayout>
    )
}