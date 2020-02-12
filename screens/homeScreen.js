import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    ActivityIndicator,

} from 'react-native';

import { Icon } from "react-native-elements";
import Cards from "../components/card";
import CardProfile from "../components/cardProfile";

class homeScreen extends Component {

    state = {
        items: [],
        isLoading: true,
    }

    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {

        if (this.isLoading === true) {
            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }

        return (
            <View>
                <ScrollView>
                    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e6e6e6", backgroundColor: "#f2f2f2" }}>

                        <View style={{ flexDirection: "row", marginLeft: 15 }}>
                            <Icon
                                name='heart'
                                size={40}
                            />
                            <Text
                                style={{ fontSize: 20, alignSelf: "center", marginLeft: 15 }}>
                                InstaCrash
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: "row-reverse", marginLeft: 15 }}>
                            <Icon
                                name='heart'
                                size={40}
                            />
                        </View>

                    </View>

                    <FlatList
                        horizontal={true}
                        data={this.state.items}
                        renderItem={({ item }) => <Cards item={item}></Cards>}
                    />

                    <FlatList 
                        data={this.state.items}
                        renderItem={({ item }) => <CardProfile item={item}></CardProfile>}
                    />

                    <View style={{ flexDirection: "row", justifyContent: "space-around", }} >
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                        <Icon name='heart' size={40} />
                    </View>

                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    lista: {
        justifyContent: "flex-start"
    },
    image1: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#e60073",
        margin: 5,

    }
});

export default homeScreen;