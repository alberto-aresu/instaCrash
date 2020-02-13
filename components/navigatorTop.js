import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";


class tabTop extends Component {

    render() {

        return (
            <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e6e6e6", backgroundColor: "#f2f2f2"}}>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Icon
                        name='heart'
                        size={40}
                    />
                    <Text
                        style={{ fontSize: 20, alignSelf: "center", marginLeft: 15 }}>
                        InstaCrash
                    </Text>
                </View>

                <View style={{ flex: 1, flexDirection: "row-reverse", marginLeft: 15 }}>
                    <Icon
                        name='heart'
                        size={40}
                    />
                </View>

            </View>
        )
    }
}

export default tabTop