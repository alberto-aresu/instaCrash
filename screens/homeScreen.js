import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,

} from 'react-native';
import { Icon } from "react-native-elements";
import Cards from "../components/card"
import Utenti from "../components/utenti"

class homeScreen extends Component {

    state = {
        items: [],
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
            <View>

                <View style={{ width: 360, height: 24, backgroundColor: "#f2f2f2", }} />
                <View style={{ top: 0, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e6e6e6", }}>

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
                        data={this.state.items}
                        initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Cards item={item}></Cards>}
                    />

                    <View style={{width:360,height:0, borderWidth:1, borderColor:"#e6e6e6", marginTop:5}}></View>

                    <FlatList
                        horizontal={false}
                        data={this.state.items}
                        initialNumToRender={10}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Utenti item={item}></Utenti>}
                    />

                </ScrollView>

                <View style={{ flexDirection: "row",borderTopWidth:1, borderTopColor:"#e6e6e6"}}>

                    <View style={styles.leftIcons}>
                        <Icon
                            name='home'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='search'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='plus-square'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='heart'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='user'
                            type='font-awesome-5'
                            size={30}
                        />
                    </View>

                </View>
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