import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    ActivityIndicator,
    SafeAreaView,

} from 'react-native';

import Cards from "../components/cardStories";
import CardProfile from "../components/cardProfile";
import TabFooter from "../components/navigationFoot";
import TabTop from "../components/navigatorTop";


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
                    <ActivityIndicator 
                    size="large" 
                    />
                </View>
            )
        }

        return (

                <ScrollView>

                    <TabTop/>

                    <FlatList
                        horizontal={true}
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        data={this.state.items}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Cards item={item}></Cards>}
                    />

                    <FlatList
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        data={this.state.items}
                        keyExtractor = {(item) => item.id}
                        renderItem={({ item }) => <CardProfile item={item}></CardProfile>}
                    />

                    <TabFooter/>

                </ScrollView>

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