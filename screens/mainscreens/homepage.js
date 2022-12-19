import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomepageStyle from "../../styles/main/homepage_styles";
import { AntDesign } from '@expo/vector-icons'
import Products from "../../components/products";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useState } from "react";
import Coming_soon from "../../components/coming_soon";

export default function Homepage() {
    const [choiceCount, setChoiceCount] = useState(0);
    return (
        <View style={{ backgroundColor: '#ffffff', height: hp('100%') }}>
            <ScrollView>
                <StatusBar backgroundColor="#FDC500" style="light" translucent={false} />
                <View style={HomepageStyle.titleView}>
                    <Text style={HomepageStyle.titleText}>
                        {'\n'} Home {'\n\n'}
                    </Text>
                    <View style={HomepageStyle.titleTextInputView}>
                        <TouchableWithoutFeedback onPress={() => { console.log('pressed') }}>
                            <AntDesign name="search1" style={HomepageStyle.searchBtn} size={22} color='#666666' />
                        </TouchableWithoutFeedback>
                        <TextInput
                            placeholder="Vegetable soup, Jollof rice, Coleslaw, Chicken"
                            style={HomepageStyle.titleTextInput}
                        />
                    </View>
                </View>
                <View style={HomepageStyle.productsView}>
                    <Text style={HomepageStyle.productsViewText}>
                        Our Products
                    </Text>
                    <Products />
                </View>
                <View style={HomepageStyle.popChoices}>
                    <Text style={HomepageStyle.productsViewText}>
                        Popular Choices
                    </Text>
                    <View>
                        {(choiceCount<=0)?<Coming_soon />:''}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}