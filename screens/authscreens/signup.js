import { TextInput, Text } from "react-native";
import AuthLayout from "../../layouts/authLayout";
import Forms from "../../styles/forms";

export default function Signup({navigation}){
    const switchToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <AuthLayout page={'Signup'} switchToLogin={switchToLogin}>
            <Text style={Forms.fieldsText}>
                First Name
            </Text>
            <TextInput placeholder="Enter Your First Name" style={Forms.inputFields} />

            <Text style={Forms.fieldsText}>
                Email Address
            </Text>
            <TextInput placeholder="Enter Your Email Address" style={Forms.inputFields} />

            <Text style={Forms.fieldsText}>
                Create Password
            </Text>
            <TextInput placeholder="Create A Password" secureTextEntry={true} returnKeyType='go' style={Forms.inputFields} />
        </AuthLayout>
    )
}