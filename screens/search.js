import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Text

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Search extends Component {

    render() {

        return (
            <View>
                <View style={{ marginTop: 25 }}>
                    <View style={styles.searchBar}>
                        <View style={styles.searchIcon}>
                            <Icon name='magnify' size={35} />
                        </View>
                        <TextInput style={styles.input} placeholder="Cerca qualcosa..." />
                    </View>
                    <View style={{ margin: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text>In verità qui non c'è niente da cercare, ma è per far vedere il navigator</Text>
                    </View>
                </View>
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
    input: {
        backgroundColor: "white",
        flex: 1
    }
})

export default Search