import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';
import { Icon, } from "react-native-elements";


class utenti extends Component {

    render() {

        return (
            <View>
                <View style={{ flexDirection: "row" }}>

                    <View
                        style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft:10 }}
                    >
                        <Image
                            source={{ uri: "https://source.unsplash.com/1600x900/" }}
                            style={styles.image1}
                        />
                        <Text
                            style={{ fontSize: 15, justifyContent: "center", }}
                            numberOfLines={1}
                        >
                            nomePersona
                        </Text>

                    </View>
                    <View style={{ flex: 2, flexDirection: "row-reverse", alignItems: "center", marginLeft: 10 }}>
                        <Icon
                            name='ellipsis-v'
                            type='font-awesome-5'
                            size={25}
                        />
                    </View>

                </View>

                <View style={{ flexDirection: "column", marginTop: 10 }}>

                    <View>
                        <Image
                            source={{ uri: "https://source.unsplash.com/1600x900/" }}
                            style={styles.image}
                        />

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>

                        <View style={styles.leftIcons}>
                            <Icon
                                name='heart'
                                type='font-awesome-5'
                                size={30}
                            />
                            <Icon
                                name='comment'
                                type='font-awesome-5'
                                size={30}
                            />
                            <Icon
                                name='paper-plane'
                                type='font-awesome-5'
                                size={30}
                            />
                        </View>
                        <View style={styles.rightIcons}>
                            <Icon
                                name='bookmark'
                                type='font-awesome-5'
                                size={30}
                            />
                        </View>

                    </View>

                    <View style={{ marginLeft: 10, flexDirection: "row" }}>
                        <Text style={{ fontSize: 15 }}>Piace a {randomItem} e a</Text>
                        <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 4 }}>altre persone</Text>
                    </View>

                    <View style={{ marginLeft: 10, flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 4, height:20 }}>nomePersona</Text>
                        <Text style={{ fontSize: 15, marginLeft: 4 }}>{this.props.item.body}</Text>
                    </View>

                    
                </View>



            </View>
        );

    }

};

let nomi = ["Carlo", "Franco", "Ignazio", "Lucia", "Gabriele", "Gesuino", "Francesco", "Ilaria", "Giulia", "Manuel", "Alberto", "Alessandro", "Simona", "Ilenia", "Luca", "Lucia",]
var randomItem = nomi[Math.floor(Math.random() * nomi.length)]; //giusto per mettere un nome a caso a ogni refresh dell'app

const styles = StyleSheet.create({
    image: {
        height: 360,
        width: 360,
        resizeMode: "cover"
        
    },
    leftIcons: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 10,
    },
    rightIcons: {
        flex: 2,
        flexDirection: "row-reverse",
        marginLeft: 10
    },
    image1: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e60073",
        margin: 5,

    }
});

export default utenti;