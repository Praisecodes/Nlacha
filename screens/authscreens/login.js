import { Text, TextInput, TouchableWithoutFeedback } from "react-native"
import AuthLayout from "../../layouts/authLayout"
import Forms from "../../styles/forms";

export default function Login({navigation}){
    const switchToSignup = () => {
        navigation.navigate('Signup');
    }

    return (
        
        <AuthLayout page={'Login'} switchToSignup={switchToSignup}>
            <Text style={Forms.fieldsText}>
                Username
            </Text>
            <TextInput style={Forms.inputFields} returnKeyType='done' placeholder={'Enter Your Username'} />

            <Text style={Forms.fieldsText}>
                Password
            </Text>
            <TextInput style={Forms.inputFields} secureTextEntry={true} returnKeyType='go' placeholder={'Enter Password'} />
            <TouchableWithoutFeedback>
                <Text style={Forms.forgot}>
                    Forgotten Password?
                </Text>
            </TouchableWithoutFeedback>
        </AuthLayout>
    )
}