import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Utenti = (props) => {

    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    return (
        <View>
            <View style={{ flexDirection: "row" }}>

                <View
                    style={styles.avatar}
                >
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Profilo", {
                            name: props.item.name,
                            avatar: props.item.avatar,
                            followers: props.item.followers,
                            following: props.item.following,
                            posts: props.item.posts,
                            description: props.item.description,
                            city: props.item.city,
                            email: props.item.email,
                            images: props.item.images,
                        })
                    }}>
                        <Image
                            source={{ uri: props.item.avatar }}
                            style={[props.item.stories ? styles.storiaTrue : styles.storiaFalse]}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{ fontSize: 15, justifyContent: "center", }}
                        numberOfLines={1}
                    >
                        {props.item.name}
                    </Text>

                </View>
                <View style={styles.drawer}>
                    <Icon
                        name='dots-vertical'
                        size={30}
                    />
                </View>

            </View>

            <View style={{ flexDirection: "column", marginTop: 10 }}>

                <ScrollView horizontal={true} pagingEnabled  >
                    {props.item.images.map((image, index) => (<Image style={[styles.image, { width: windowWidth }]} key={index} source={{ uri: image }}></Image>))}
                </ScrollView>

                <View style={{ flexDirection: "row", margin: 10 }}>

                    <View style={styles.leftIcons}>
                        <Icon
                            name='heart-outline'
                            size={30}
                        />
                        <Icon
                            name='chat-outline'
                            size={30}
                        />
                        <Icon
                            name='send'
                            size={30}
                        />
                    </View>
                    <View style={styles.rightIcons}>
                        <Icon
                            name='tag-outline'
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

                <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 15 }}>1 ora fa</Text>

            </View>

        </View>
    );
}


const Profilo = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    )
}


let nomi = ["Carlo", "Franco", "Ignazio", "Lucia", "Gabriele", "Gesuino", "Francesco", "Ilaria", "Giulia", "Manuel", "Alberto", "Alessandro", "Simona", "Ilenia", "Luca", "Lucia",]
var randomItem = nomi[Math.floor(Math.random() * nomi.length)]; //giusto per mettere un nome a caso a ogni refresh dell'app

const styles = StyleSheet.create({
    image: {
        height: 360,
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

export default Utenti;