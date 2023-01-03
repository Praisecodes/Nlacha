import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Coming_soon from "../../components/coming_soon";
import MenuStyle from "../../styles/main/menu_style";
import Selected from "../../components/selected";
import Recommended from "../../components/recommended";

export default function Menupage({ navigation, route }){
    const [count, setCount] = useState(0);
    const [listItem, setListItem] = useState({});

    useEffect(()=>{
        if(route.params){
            setListItem(route.params.listItem);
            setCount(Object.keys(listItem).length);
        }
        else{
            console.log('Not Existing');
            setCount(0);
        }
    })

    return (
        <View style={{height: heightPercentageToDP('100%'), backgroundColor: '#ffffff'}}>
            <ScrollView contentContainerStyle={{paddingBottom: 30}}>
                <StatusBar style="light" translucent={false} backgroundColor="#FDC500" />
                <Header page={'Menu'} />
                <View>
                    {((count>0)?
                        <Selected listItem={listItem} />
                    :
                        <Coming_soon customText={"Please Select A Meal From Home Page!"} />
                    )}
                </View>
                <View style={MenuStyle.recommended}>
                    <Text style={MenuStyle.recommendedTitle}>
                        Recommended sides
                    </Text>
                    {((count > 0)?
                        <Recommended selectedCategory={listItem.category} />
                        :
                        <Coming_soon customText={"Nothing To See Here!!"} />
                    )}
                </View>
            </ScrollView>
        </View>
    )
}