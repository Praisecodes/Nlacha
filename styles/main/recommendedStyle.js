import { StyleSheet } from "react-native";

const RecommendedStyle = StyleSheet.create({
    image: {
        width: '25%',
        height: 80,
        borderRadius: 3,
    },
    containerView: {
        width: '100%',
        borderColor: '#dddddd',
        // height: 50,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: "Nunito",
        fontSize: 16,
    },
    selectView: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    actionBtns: {
        borderRadius: 15,
        backgroundColor: "#cccccc",
        paddingHorizontal: 5,
        marginHorizontal: 5,
        fontFamily: "Nunito",
        fontSize: 20,
        paddingVertical: 0,
        textAlignVertical: 'center'
    }
});

export default RecommendedStyle;
