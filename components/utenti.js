import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Animated,
    Easing

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const AnimatedIcon = Animated.createAnimatedComponent(Icon)
const windowWidth = Dimensions.get('window').width;

const Utenti = (props) => {

    const navigation = useNavigation();
    const [like, setLike] = useState(false);
    const spring = useRef(new Animated.Value(1)).current;

    const springAnimation = () => {
        setLike(!like)
        Animated.sequence(
            [Animated.spring(spring, {
                toValue: 2,
                useNativeDriver: true,
            }), Animated.spring(spring, {
                toValue: 1,
                useNativeDriver: true,
            })]).start()
    }

    return (
        <View>
            <View style={{ flexDirection: "row" }}>

                <View
                    style={styles.avatar}
                >
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} onPress={() => {
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
                        <Text
                            style={{ fontSize: 15, justifyContent: "center", }}
                            numberOfLines={1}
                        >
                            {props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.drawer}>
                    <Icon
                        name='dots-vertical'
                        size={30}
                        onPress={() => {alert("Pressed")}}
                    />
                </View>

            </View>

            <View style={{ flexDirection: "column", marginTop: 10 }}>

                <ScrollView horizontal={true} pagingEnabled>
                    
                        {props.item.images.map((image, index) => (<TouchableOpacity activeOpacity={1} style={{flexDirection:"row"}} onPress={() => {navigation.navigate("ImmagineFullScreen", {image: image})}}><Image style={styles.image} key={index} source={{ uri: image }} /></TouchableOpacity>))}
                    
                </ScrollView>

                <View style={{ flexDirection: "row", margin: 10 }}>

                    <View style={styles.leftIcons}>
                        <AnimatedIcon
                            style={[styles.heart, { transform: [{ scale: spring }] }]}
                            name={like ? "cards-heart" : 'heart-outline'}
                            color={like ? "red" : "black"}
                            onPress={springAnimation}
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


let nomi = ["Carlo", "Franco", "Ignazio", "Lucia", "Gabriele", "Gesuino", "Francesco", "Ilaria", "Giulia", "Manuel", "Alberto", "Alessandro", "Simona", "Ilenia", "Luca", "Lucia",]
var randomItem = nomi[Math.floor(Math.random() * nomi.length)]; //giusto per mettere un nome a caso a ogni refresh dell'app

const styles = StyleSheet.create({
    image: {
        height: 360,
        resizeMode: "cover",
        width: windowWidth
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
    },
    heart: {
        fontSize: 30
    }
});

export default Utenti;