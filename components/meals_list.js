import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import MealsListStyle from "../styles/main/meals_list_style";
import { Feather } from "@expo/vector-icons";

export default function MealsList({lists}) {
    return (
        // <View>
            (lists.map((list)=>(
                <View key={list.id} style={MealsListStyle.containerView}>
                    <Image source={{uri: list.image}} style={MealsListStyle.MealImage} />
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text
                            style={{
                                padding: 8,
                                fontFamily: "Nunito_bold",
                                fontSize: 17,
                                color: "#1E0C4A"
                            }}
                        >
                            {list.meal}{'\n'}N{list.price}
                        </Text>
                        <View style={{display: 'flex', flexDirection: "row", paddingHorizontal: 8}}>
                            <Feather name="shopping-cart" size={20} style={{marginHorizontal: 4, paddingHorizontal: 3}} color="#1E0C4A" />
                            <Feather name="heart" size={20} style={{marginHorizontal: 4, paddingHorizontal: 3}} color="#1E0C4A" />
                        </View>
                    </View>
                </View>
            )))
        // </View>
    )
}