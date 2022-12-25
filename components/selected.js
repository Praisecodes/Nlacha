import { View, Text, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";

export default function Selected({listItem}){
    return (
        <View style={{padding: 10, width: '100%'}}>
            <Image source={{uri: listItem.image}} style={{
                width: '100%',
                height: hp('30%'),
                resizeMode: 'cover',
                borderRadius: 10,
            }} />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    color: '#1E0C4A',
                    fontFamily: 'Nunito',
                    fontSize: 19,
                    paddingVertical: 10,
                }}>
                    {listItem.meal}{'\n'}N{listItem.price}
                </Text>
                <View style={{width: '20%', justifyContent: 'space-around', display: 'flex', flexDirection: 'row'}}>
                    <Feather name="shopping-cart" size={20} style={{marginHorizontal: 7, padding: 3}} color="#1E0C4A" />
                    <Feather name="heart" size={20} style={{marginHorizontal: 7, padding: 3}} color="#1E0C4A" />
                </View>
            </View>
        </View>
    )
}