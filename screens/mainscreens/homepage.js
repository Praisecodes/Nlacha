import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomepageStyle from "../../styles/main/homepage_styles";
import { AntDesign } from '@expo/vector-icons'
import Products from "../../components/products";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useState, useEffect } from "react";
import Coming_soon from "../../components/coming_soon";
import MealsList from "../../components/meals_list";

export default function Homepage() {
    const [list, setList] = useState([]);
    const [choiceCount, setChoiceCount] = useState(list.length);
    const [category, setCategory] = useState('food');

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    }

    // useEffect(()=>{
    //     fetch(`${(category == 'food')?'https://api.nlacha.com':`https://api.nlacha.com/${category}`}`)
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         setList([...data]);
    //     })
    // },[category])

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
                    <Products changeCategory={changeCategory} />
                </View>
                <View style={HomepageStyle.popChoices}>
                    <Text style={HomepageStyle.productsViewText}>
                        Popular Choices
                    </Text>
                    <View>
                        {(choiceCount<=0)?<Coming_soon />:<MealsList list={list} category={category} />}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}