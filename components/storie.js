import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';

export default Storie = (props) => {

    return (

        <View style={{ flexDirection: "row", marginLeft: 20, }}>

            <View
                style={styles.avatar}
            >
                <Image
                    source={{ uri: props.item.avatar }}
                    style={[props.item.stories ? styles.storiaTrue : styles.storiaFalse]}
                />
                <Text
                    style={{ fontSize: 15, justifyContent: "center", maxWidth: 90 }}
                    numberOfLines={1}
                >
                    {props.item.name}
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    storiaTrue: {
        width: 56,
        height: 56,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e60073",
        margin: 5,
    },
    storiaFalse: {
        width: 55,
        height: 55,
        borderRadius: 40,
        margin: 5,
    }
});
