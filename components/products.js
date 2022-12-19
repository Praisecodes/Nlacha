import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import HomepageStyle from "../styles/main/homepage_styles";
import { useState } from "react";

export default function Products() {
    const [section, setSection] = useState('food');
    const food = require('../assets/images/onboardone_image.png');
    const protein = require('../assets/images/protein.png');
    const vegetable = require('../assets/images/vegetables.png');
    const pastry = require('../assets/images/pastry.png');
    const drinks = require('../assets/images/drinks.png');

    const changeSection = (activeSection) => {
        setSection(activeSection);
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={HomepageStyle.productsViewMenu}>
                <TouchableWithoutFeedback onPress={() => { changeSection('food') }}>
                    <View style={HomepageStyle.productsMenuView}>
                        <Image source={food} style={HomepageStyle.productsImage} />
                        <Text style={[HomepageStyle.productsViewMenuText, ((section == "food") ? HomepageStyle.selected : '')]}>
                            Food
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { changeSection('protein') }}>
                    <View style={HomepageStyle.productsMenuView}>
                        <Image source={protein} style={HomepageStyle.productsImage} />
                        <Text style={[HomepageStyle.productsViewMenuText, ((section == "protein") ? HomepageStyle.selected : '')]}>
                            Protein
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { changeSection('vegetable') }}>
                    <View style={HomepageStyle.productsMenuView}>
                        <Image source={vegetable} style={HomepageStyle.productsImage} />
                        <Text style={[HomepageStyle.productsViewMenuText, ((section == "vegetable") ? HomepageStyle.selected : '')]}>
                            Vegetable
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { changeSection('pastry') }}>
                    <View style={HomepageStyle.productsMenuView}>
                        <Image source={pastry} style={HomepageStyle.productsImage} />
                        <Text style={[HomepageStyle.productsViewMenuText, ((section == "pastry") ? HomepageStyle.selected : '')]}>
                            Pastry
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { changeSection('drinks') }}>
                    <View style={HomepageStyle.productsMenuView}>
                        <Image source={drinks} style={HomepageStyle.productsImage} />
                        <Text style={[HomepageStyle.productsViewMenuText, ((section == "drinks") ? HomepageStyle.selected : '')]}>
                            Drinks
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    )
}