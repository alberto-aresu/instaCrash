import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    Text,
    SafeAreaView,
    Button

} from 'react-native';
import Storie from "../components/storie";
import Utenti from "../components/utenti";
import { Icon } from "react-native-elements";


export default Homescreen = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2')
            .then((response) => response.json())
            .then((json) => {
                setItems(json);
                setLoading(false)
            })
            .catch((error) => console.error(error));
    }, []);

    if (loading === true) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View >
            <View style={styles.statusBar}>

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
            <ScrollView>

                <FlatList
                    horizontal={true}
                    data={items}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Storie item={item}></Storie>}
                />

                <View style={styles.separator}></View>

                <FlatList
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Utenti item={item}></Utenti>}
                /> 

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6",
        backgroundColor: "#f2f2f2",
        marginTop: 25
    },
    leftIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5
    },
    separator: {
        width: 360,
        height: 0,
        borderWidth: 1,
        borderColor: "#e6e6e6",
        marginTop: 5,
        marginBottom: 5
    }
});

//export default homeScreen;