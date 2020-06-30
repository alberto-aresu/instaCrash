import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ImageStore,

} from 'react-native';
import { Icon, } from "react-native-elements";


class utenti extends Component {

    render() {

        const {images} = this.props.item

        return (
            <View>
                <View style={{ flexDirection: "row" }}>

                    <View
                        style={{  flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft:10 }}
                    >
                        <Image
                            source={{uri:this.props.item.avatar}}
                            style={[this.props.item.stories ? styles.storiaTrue : styles.storiaFalse]}
                        />
                        <Text
                            style={{ fontSize: 15, justifyContent: "center", }}
                            numberOfLines={1}
                        >
                            {this.props.item.name}
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

                    <ScrollView horizontal pagingEnabled >
                        {this.props.item.images.map((image, index) => (<Image style={styles.image} key={image} source={{uri:image}}></Image>))}
                    </ScrollView>
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
                        <Text style={{ fontSize: 15, fontWeight: "700",}}>{this.props.item.name} <Text style={{ fontSize: 15, marginLeft: 4, fontWeight: "400" }}>{this.props.item.comment}</Text></Text>
                        
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

export default utenti;