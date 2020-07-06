import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class myProfile extends Component {
    render() {
        return (
            <View>

                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <View style={styles.profileName}>
                        <Text style={styles.nameText}>nomePersona</Text>
                    </View>
                    <View style={styles.drower}>
                        <Icon
                            name='menu'
                            size={35}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/8a/1b/87/8a1b87617889b4f1e40dd9613b705cbf.jpg" }}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.profileView}>
                        <View style={styles.statsView}>
                            <Text style={styles.profileStats}>{Math.floor(Math.random() * 20)}</Text>
                            <Text>Post</Text>
                        </View>
                        <View style={styles.statsView}>
                            <Text style={styles.profileStats}>{Math.floor(Math.random() * 30)}</Text>
                            <Text>Follower</Text>
                        </View>
                        <View style={styles.statsView}>
                            <Text style={styles.profileStats}>{Math.floor(Math.random() * 200)}</Text>
                            <Text>Seguiti</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.nameImage}>nomePersona</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => { alert("Bottone Premuto") }}>
                        <Text style={styles.textButton}>Modifica il profilo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileName: {
        flexDirection: "row",
    },
    nameText: {
        fontSize: 15,
        fontWeight: "700",
        margin: 15
    },
    drower: {
        flex: 1,
        flexDirection: "row-reverse",
        margin: 15
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 40,
        marginLeft: 15
    },
    nameImage: {
        fontSize: 13,
        fontWeight: "700",
        margin: 15
    },
    profileView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
    },
    statsView: {
        flexDirection: "column",
        alignItems: "center"
    },
    profileStats: {
        fontSize: 15,
        fontWeight: "700",
    },
    button: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: "white",
        justifyContent: 'center', alignItems: 'center',
        borderWidth: 2,
        borderColor: "#e6e6e6",
    },
    textButton: {
        fontSize: 15,
        fontWeight: "700",
        margin: 7,
    }
})

export default myProfile