import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomepageStyle from "../../styles/main/homepage_styles";
import { AntDesign } from '@expo/vector-icons'
import Products from "../../components/products";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useState, useEffect } from "react";
import Coming_soon from "../../components/coming_soon";
import MealsList from "../../components/meals_list";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Homepage() {
    const [list, setList] = useState([]);
    const [choiceCount, setChoiceCount] = useState(list.length);
    const [category, setCategory] = useState('food');

    const changeCategory = (newCategory) => {
        setCategory(newCategory);
    }

    const getJwt = async () => {
        const jwt = await AsyncStorage.getItem('user_token');
        if(jwt !== null){
            const val = jwt;
            fetch(`https://nlacha.herokuapp.com/menu.php?category=${category}`,{
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${val}`
                }
            })
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data);
                if(!data.length>0) setChoiceCount(0);
                setList([...data]);
                setChoiceCount(data.length);
            })
            .catch((e)=>{console.log(e)});
        }
        else{
            return null;
        }
    }

    useEffect(()=>{
        getJwt();
    }, [category]);

    return (
        <View style={{ backgroundColor: '#ffffff', height: hp('100%') }}>
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
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
                        {(choiceCount<=0)?<Coming_soon />:<MealsList lists={list} />}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}