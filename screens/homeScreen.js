import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    FlatList,
    ActivityIndicator,
    Dimensions,
    Image,

} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { put } from 'redux-saga/effects';
import Storie from "../components/storie";
import Utenti from "../components/utenti";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import apiData from "../redux/reducer";
import sagaActions from "../saga/sagaActions";
import users from "../redux/reducerSaga";


const Homescreen = () => {

    const windowWidth = Dimensions.get('window').width;

    const [items, setItems] = useState([]);
    const loading = useSelector(state => state.load);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2");
            const data = await response.json();
            setItems(data)
            dispatch(apiData.actions.FETCH_DATA(data))
        } fetchData()
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

                <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "center" }}>
                    <Icon
                        name='camera-outline'
                        size={30}
                    />
                    <Image
                        source={require("../assets/images/instagram-logo.png")}
                        style={styles.logo}
                    />

                </View>

                <View style={{ flex: 1, flexDirection: "row-reverse", marginRight: 15, alignItems: "center" }}>
                    <Icon
                        name='send'
                        size={30}
                    />
                </View>
            </View>
            <ScrollView>

                <FlatList
                    horizontal={true}
                    data={items}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Storie item={item}></Storie>}
                />

                <View style={styles.separator} width={windowWidth}></View>

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
        marginTop: 25
    },
    logo: {
        height: 48,
        width: 140,
        alignItems: "center",
        marginLeft: 10
    },
    leftIcons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5
    },
    separator: {
        height: 0,
        borderWidth: 1,
        borderColor: "#e6e6e6",
        marginTop: 5,
        marginBottom: 5
    }
});

export default Homescreen;