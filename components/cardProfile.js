import React, {Component} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    FlatList,
} from "react-native";
import { Icon } from "react-native-elements";


class cardProfile extends Component {

    state = {
        storia: false
    }

    render() {

        return (
            <View>

                <View
                    style={styles.container}
                >
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={{ uri: this.props.item.avatar }}
                            style={styles.smallImage}
                        />

                        <Text
                            style={{ fontSize: 15, marginLeft: 5, }}
                        >
                            {this.props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{flexDirection:"row"}}>
                    <Image
                        source={{ uri: this.props.item.images[2] }}
                        style={{ width: 412, height: 400 }}
                        resizeMode="cover"
                    />
                </ScrollView>

                <View style={{ flexDirection: "row" }}>

                    <View style={{ flex: 3, flexDirection: "row", justifyContent: "space-around" }}>
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                    </View>
                    <View style={{ flex: 5, flexDirection: "row-reverse", marginLeft: 15 }}>
                        <Icon name='heart' size={40} />
                    </View>

                </View>

                <View style={{ marginLeft: 5 }}>
                    <Text style={{ fontSize: 15 }}>
                        Piace a {this.props.item.following} persone
                        </Text>
                </View>

                <View style={{ marginLeft: 5, flexDirection:"row" }}>
                    <Text style={{ fontSize: 15 }}>
                    {this.props.item.name} {this.props.item.comment}
                        </Text>
                </View>

                <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <Image
                        source={{ uri: this.props.item.avatar }}
                        style={styles.smallImage2}
                    />
                    <TextInput
                        placeholder="Scrivi un commento.."

                    />
                </View>


            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#e6e6e6",
    },
    smallImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#e60073",
        margin: 5,
    },
    smallImage2: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#e60073",
        margin: 5,
    },
    smallImageNoBorder: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 25
    },
    smallImageNoBorder2: {
        width: 35,
        height: 35,
        margin: 5,
        borderRadius: 25
    },
})

export default cardProfile;