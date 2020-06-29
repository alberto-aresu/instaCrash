import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    StatusBar,
    SafeAreaView,

} from 'react-native';
import { Icon } from "react-native-elements";
import Cards from "../components/card"
import users from "../components/users"
import Utenti from "../components/utenti"

class homeScreen extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => this.setState({ items: json }));

    }

    render() {

        if (this.state.items.length === 0) {
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <SafeAreaView>

                <ScrollView>
                    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e6e6e6", backgroundColor: "#f2f2f2", marginTop: 25 }}>

                        <View style={{ flexDirection: "row", marginLeft: 15 }}>
                            <Icon
                                name='camera'
                                type='font-awesome-5'
                                size={40}
                            />
                            <Text
                                style={{ fontSize: 20, alignSelf: "center", marginLeft: 15 }}>
                                InstaCrash
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row-reverse", marginLeft: 15 }}>
                            <Icon
                                name='paper-plane'
                                type='font-awesome-5'
                                size={40}
                            />
                        </View>

                    </View>

                    <FlatList
                        horizontal={true}
                        data={this.state.items}
                        initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Cards item={item}></Cards>}
                    />

                    <View style={{ flexDirection: "row", marginLeft: 20 }}>

                        <View
                            style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}
                        >
                            <Image
                                source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                                style={styles.image1}
                            />
                            <Text
                                style={{ fontSize: 15, justifyContent: "center", }}
                                numberOfLines={1}
                            >
                                nomePersona
                            </Text>

                        </View>

                    </View>

                    <FlatList
                        horizontal={false}
                        data={this.state.items}
                        initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Utenti item={item}></Utenti>}
                    />

                </ScrollView>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
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

export default homeScreen;