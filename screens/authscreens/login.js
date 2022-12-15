import { Text } from "react-native"
import AuthLayout from "../../layouts/authLayout"

export default function Login({navigation}){
    const switchToSignup = () => {
        navigation.navigate('Signup');
    }

    return (
        <AuthLayout page={'Login'} switchToSignup={switchToSignup}>
            <Text>
                This is the login screen
            </Text>
        </AuthLayout>
    )
}