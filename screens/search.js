import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput

} from 'react-native';

import { Icon } from "react-native-elements";

class Search extends Component {

    render() {

        return (
            <View>
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Icon name='search' type='font-awesome-5' size={25} />
                    </View>
                    <TextInput style={styles.input} placeholder="Cerca qualcosa..." />
                </View>
                <ScrollView>
                    
                </ScrollView>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#e6e6e6"
    },
    searchIcon: {
        margin: 10
    },
    input:{
        backgroundColor: "white",
        flex:1
    }
})

export default Search