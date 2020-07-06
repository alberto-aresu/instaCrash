import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';
import { Icon, } from "react-native-elements";

const Utenti = (props) => {

        return (
            <View>
                <View style={{ flexDirection: "row" }}>

                    <View
                        style={styles.avatar}
                    >
                        <Image
                            source={{ uri: props.item.avatar }}
                            style={[props.item.stories ? styles.storiaTrue : styles.storiaFalse]}
                        />
                        <Text
                            style={{ fontSize: 15, justifyContent: "center", }}
                            numberOfLines={1}
                        >
                            {props.item.name}
                        </Text>

                    </View>
                    <View style={styles.drawer}>
                        <Icon
                            name='ellipsis-v'
                            type='font-awesome-5'
                            size={25}
                        />
                    </View>

                </View>

                <View style={{ flexDirection: "column", marginTop: 10 }}>

                    {/* <ScrollView horizontal={true} pagingEnabled >
                    {this.props.item.images.map((image, index) => (<Image style={styles.image} key={image} source={{ uri: image }}></Image>))}
                        in teoria il giusto dovrebbe essere questo che ho commentato qui sopra, ma da errore per via delle chiavi che hanno tutte lo stesso nome 
                        e, anche cercando per ore e provando diverse cose, non so risolvere il problema. Uso quello sotto che rende l'app utilizzabile
                    </ScrollView>*/}

                    <View>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
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
                        <Text style={{ fontSize: 15, fontWeight: "700", }}>{props.item.name} <Text style={{ fontSize: 15, marginLeft: 4, fontWeight: "400" }}>{props.item.comment}</Text></Text>

                    </View>

                </View>

            </View>
        );
    }



let nomi = ["Carlo", "Franco", "Ignazio", "Lucia", "Gabriele", "Gesuino", "Francesco", "Ilaria", "Giulia", "Manuel", "Alberto", "Alessandro", "Simona", "Ilenia", "Luca", "Lucia",]
var randomItem = nomi[Math.floor(Math.random() * nomi.length)]; //giusto per mettere un nome a caso a ogni refresh dell'app

const styles = StyleSheet.create({
    image: {
        height: 360,
        width: 360,
        resizeMode: "cover"
    },
    avatar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    drawer: {
        flex: 2,
        flexDirection: "row-reverse",
        alignItems: "center",
        marginLeft: 10
    },
    leftIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    rightIcons: {
        flex: 2,
        flexDirection: "row-reverse",
        marginLeft: 10
    },
    storiaTrue: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e60073",
        margin: 5,
    },
    storiaFalse: {
        width: 39,
        height: 39,
        borderRadius: 40,
        margin: 5,
    }
});

export default Utenti