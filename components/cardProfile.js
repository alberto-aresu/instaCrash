import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,


} from "react-native";
import { Icon } from "react-native-elements";


class cardProfile extends React.PureComponent {

    state = {
        storia: false
    }

    render() {

        if (this.state.storia === true) {
            return (
                <View>

                    <View
                        style={styles.container}
                    >
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                                style={styles.smallImage}
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
                            Piace a {Math.floor(Math.random() * 100) + 1} persone
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 5 }}>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                            style={styles.smallImage2}
                        />
                        <TextInput
                            placeholder="Scrivi un commento.."

                        />
                    </View>
                    

                </View>
            )
        }

            return (
                <View>

                    <View
                        style={styles.container}
                    >
                        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image
                                source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                                style={styles.smallImageNoBorder}
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
                            Piace a {Math.floor(Math.random() * 100) + 1} persone
                    </Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 5 }}>
                    <Text
                            style={{ fontSize: 15, marginRight:5, fontWeight:"700"}}
                        >
                            {this.props.item.name}
                        </Text>
                        <Text
                            style={{ fontSize: 15,}}
                        >
                            {this.props.item.company.catchPhrase}
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 5 }}>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                            style={styles.smallImageNoBorder2}
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
    container : {
        flexDirection: "row", 
        alignItems: "center", 
        borderTopWidth: 1, 
        borderTopColor: "#e6e6e6", 
    },
    smallImage :{
        width: 40, 
        height: 40, 
        borderRadius: 25, 
        borderWidth: 3, 
        borderColor: "#e60073", 
        margin: 5, 
    },
    smallImage2 :{
        width: 35, 
        height: 35, 
        borderRadius: 25, 
        borderWidth: 3, 
        borderColor: "#e60073", 
        margin: 5, 
    },
    smallImageNoBorder :{
        width: 40, 
        height: 40,
        margin: 5, 
        borderRadius:25
    },
    smallImageNoBorder2 :{
        width: 35, 
        height: 35,
        margin: 5, 
        borderRadius:25
    },
})

export default cardProfile;