import { View, Text } from "react-native";
import { useEffect, useState } from "react";

export default function MealsList({list, category}) {
    return (
        <View>
            <Text>
                This is the {category} category
            </Text>
        </View>
    )
}