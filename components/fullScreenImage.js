import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fullScreenImage = (props) => {

    const {
        image } = props.route.params

    return (

        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center',
            backgroundColor: "black"
        }}>
            <Image style={style.imageFullScreen} source={{ uri: image }}></Image>
        </View>
    )
}

const style = StyleSheet.create({
    imageFullScreen: {
        height: windowHeight / 2,
        width: windowWidth,
        resizeMode: "cover"
    }
})

export default fullScreenImage