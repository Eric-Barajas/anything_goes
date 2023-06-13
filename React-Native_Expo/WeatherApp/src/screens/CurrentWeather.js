import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = () => {
    const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}> 6 </Text>
                <Text style={feels}> Feels like 5 </Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
                {/* ^ whats above replaced whats below (you can see the completed version on line 20) */}
                {/* <View style={highLowWrapper}>
                    <Text style={highLow}> High: 8 </Text>
                    <Text style={highLow}> Low: 6</Text>
                </View> */}
            </View>
            <RowText
                messageOne={"It's sunny"}
                messageTwo={"It's perfect t-shirt weather"}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "pink",
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    temp: {
        color: "black",
        fontSize: 48,
    },
    feels: {
        color: "black",
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: "row",
    },
    highLow: {
        color: "black",
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        color: "black",
        fontSize: 48,
    },
    message: {
        color: "black",
        fontSize: 30,
    },
})

export default CurrentWeather;