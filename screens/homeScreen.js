import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,

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
        return fetch('http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2')
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
                <View style={styles.loading}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        }

        return (

            <View style={styles.container}>

                <TabTop />

                <FlatList
                    horizontal={true}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    data={this.state.items}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <Cards item={item}></Cards>}
                />

                <FlatList
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    data={this.state.items}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <CardProfile item={item}></CardProfile>}
                />

                <TabFooter />

            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center"
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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