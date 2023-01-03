import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecommendedStyle from "../styles/main/recommendedStyle";

export default function Recommended({ selectedCategory }){
    const [recommended, setRecommend] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const jwt = await AsyncStorage.getItem('user_token');
            if(jwt != null){
                fetch(`https://nlacha.herokuapp.com/menu.php?category=${selectedCategory}`,{
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
                .then(res=>res.json())
                .then((data)=>{
                    console.log(data);
                    setRecommend([...data]);
                })
            }
        })()
    },[selectedCategory])

    return (
        <View>
            {(
                recommended.map((recommend)=>(
                    <View key={recommend.id} style={RecommendedStyle.containerView}>
                        <Image source={{uri: recommend.image}} style={RecommendedStyle.image} />
                        <Text style={RecommendedStyle.text}>
                            {recommend.meal}
                        </Text>
                        <Text style={RecommendedStyle.text}>
                            #{recommend.price}
                        </Text>
                        <View style={RecommendedStyle.selectView}>
                            <Text style={RecommendedStyle.actionBtns}>+</Text>
                            <Text>{recommend.stockAvailable}</Text>
                            <Text style={RecommendedStyle.actionBtns}>-</Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    )
}