import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    ActivityIndicator,

} from 'react-native';
import Storie from "../components/storie"
import Utenti from "../components/utenti"

class homeScreen extends Component {

    state = {
        items: [],
    }

    componentDidMount() {
        return fetch('http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    items: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
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
            <View>

                <ScrollView>

                    <FlatList
                        horizontal={true}
                        data={this.state.items}
                        initialNumToRender={10}
                        maxToRenderPerBatch={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Storie item={item}></Storie>}
                    />

                    <View style={{ width: 360, height: 0, borderWidth: 1, borderColor: "#e6e6e6", marginTop: 5, marginBottom: 5 }}></View>

                    <FlatList
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        data={this.state.items}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => <Utenti item={item}></Utenti>}
                    />

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
    leftIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5
    },
});

export default homeScreen;