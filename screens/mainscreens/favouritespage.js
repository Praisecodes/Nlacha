import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Coming_soon from "../../components/coming_soon";
import Header from "../../components/header";

export default function FavouritePage() {
    return (
        <View style={{height: heightPercentageToDP('100%'), backgroundColor: '#ffffff'}}>
            <ScrollView>
                <StatusBar style="light" translucent={false} backgroundColor="#FDC500" />
                <Header page={'Favourites'} />
                <View>
                    <Coming_soon customText={"Nothing To See Here!!"} />
                </View>
            </ScrollView>
        </View>
    )
}