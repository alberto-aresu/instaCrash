import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";


class tabFooter extends Component {

    render() {

        return (

            <View style={{flex:1, flexDirection: "row", justifyContent: "space-around"}} >

                <Icon name='heart' size={40} />
                <Icon name='heart' size={40} />
                <Icon name='heart' size={40} />
                <Icon name='heart' size={40} />
                <Icon name='heart' size={40} />

            </View>
        )
    }
}

export default tabFooter