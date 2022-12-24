import { TextInput, Text } from "react-native";
import AuthLayout from "../../layouts/authLayout";
import Forms from "../../styles/forms";
import { useState } from "react";

export default function Signup({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const switchToLogin = () => {
        navigation.navigate('Login');
    }

    const SignupUser = () => {
        fetch('https://nlacha.herokuapp.com/signup.php', {
            method: 'POST',
            headers: "Content-Type: application/json",
            body: JSON.stringify({
                "Name": firstName,
                "username": username,
                "email": email,
                "password": password,
            })
        })
        .then(res=>{
            switch(res.status){
                case 400:
                    alert('Please Make Sure You Filled All Fields');
                    break;
                case 500:
                    alert('Internal Server Error!');
                    break;
                case 403:
                    alert('User Already Exists');
                    break;
                default:
                    return res.json();
            }
        })
        .then((data)=> {
            if(!data) return null;
            alert(data);
            switchToLogin();
        })
        .catch((e)=>{console.log(e)})
    }

    return (
        <AuthLayout page={'Signup'} SignupUser={SignupUser} switchToLogin={switchToLogin}>
            <Text style={Forms.fieldsText}>
                Full Name
            </Text>
            <TextInput
                placeholder="Enter Your Full Name"
                style={Forms.inputFields}
                value={firstName}
                onChangeText={(e) => { setFirstName(e) }}
            />

            <Text style={Forms.fieldsText}>
                Username
            </Text>
            <TextInput
                placeholder="Choose A Username"
                style={Forms.inputFields}
                value={username}
                onChangeText={(e) => { setUsername(e) }}
            />

            <Text style={Forms.fieldsText}>
                Email Address
            </Text>
            <TextInput
                placeholder="Enter Your Email Address"
                style={Forms.inputFields}
                value={email}
                onChangeText={(e) => { setEmail(e) }}
            />

            <Text style={Forms.fieldsText}>
                Create Password
            </Text>
            <TextInput
                placeholder="Create A Password"
                secureTextEntry={true}
                returnKeyType='go'
                style={Forms.inputFields}
                value={password}
                onChangeText={(e) => { setPassword(e) }}
            />
        </AuthLayout>
    )
}