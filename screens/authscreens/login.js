import { Text, TextInput, TouchableWithoutFeedback } from "react-native"
import AuthLayout from "../../layouts/authLayout"
import Forms from "../../styles/forms";
import { useState } from "react";

export default function Login({navigation, changeFocus}){
    const switchToSignup = () => {
        navigation.navigate('Signup');
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const checkLogin = (correctPassword, correctUsername) => {
        // ((password == correctPassword && username == correctUsername)?true:false);
        if((password == correctPassword) && (username == correctUsername)){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        
        <AuthLayout page={'Login'} changeFocus={changeFocus} switchToSignup={switchToSignup} handleLogin={checkLogin}>
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