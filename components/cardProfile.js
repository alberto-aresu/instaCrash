import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,

} from "react-native";

class cardProfile extends Component {

    render() {

        return (
            <View>

                <View
                    style={{ flexDirection: "row", alignItems: "center", borderTopWidth: 1, borderTopColor: "#e6e6e6", }}
                >
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                            style={{ width: 40, height: 40, borderRadius: 25, borderWidth: 3, borderColor: "#e60073", margin: 5 }}
                        />

                        <Text
                            style={{ fontSize: 15, marginLeft: 5, }}
                        >
                            {this.props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <Image
                        source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                        style={{ width: 412, height: 400 }}
                    />
                </View>

            </View>
        )
    }
}

export default cardProfile;