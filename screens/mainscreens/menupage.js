import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import Header from "../../components/header";
import Coming_soon from "../../components/coming_soon";
import MenuStyle from "../../styles/main/menu_style";
import Selected from "../../components/selected";

export default function Menupage({navigation, route}){
    const {listItem} = route.params;
    const [count, setCount] = useState(Object.keys(listItem).length);
    return (
        <View style={{height: heightPercentageToDP('100%'), backgroundColor: '#ffffff'}}>
            <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                <StatusBar style="light" translucent={false} backgroundColor="#FDC500" />
                <Header page={'Menu'} />
                <View>
                    {((count>0)?
                        <Selected listItem={listItem} />
                    :
                        <Coming_soon />
                    )}
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