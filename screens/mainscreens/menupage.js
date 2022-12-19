import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../components/header";
import Coming_soon from "../../components/coming_soon";
import MenuStyle from "../../styles/main/menu_style";

export default function Menupage(){
    return (
        <View style={{height: heightPercentageToDP('100%'), backgroundColor: '#ffffff'}}>
            <ScrollView>
                <StatusBar style="light" translucent={false} backgroundColor="#000000" />
                <Header page={'Menu'} />
                <View>
                    <Coming_soon />
                </View>
                <View style={MenuStyle.recommended}>
                    <Text style={MenuStyle.recommendedTitle}>
                        Recommended sides
                    </Text>
                    <Coming_soon />
                </View>
            </ScrollView>
        </View>
    )
}