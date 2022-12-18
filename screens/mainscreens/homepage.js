import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomepageStyle from "../../styles/main/homepage_styles";
import { AntDesign } from '@expo/vector-icons'

export default function Homepage(){
    return(
        <View>
            <StatusBar backgroundColor="#FDC500" style="light" translucent={false} />
            <View style={HomepageStyle.titleView}>
                <Text style={HomepageStyle.titleText}>
                    {'\n'} Home {'\n\n'}
                </Text>
                <View style={HomepageStyle.titleTextInputView}>
                    <TouchableWithoutFeedback onPress={()=>{console.log('pressed')}}>
                        <AntDesign name="search1" style={HomepageStyle.searchBtn} size={22} color='#666666' />
                    </TouchableWithoutFeedback>
                    <TextInput 
                        placeholder="Vegetable soup, Jollof rice, Coleslaw, Chicken" 
                        style={HomepageStyle.titleTextInput}
                    />
                </View>
            </View>
        </View>
    )
}