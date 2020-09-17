import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    Dimensions

} from 'react-native';
import { useSelector } from "react-redux";

const Activities = () => {

    const [item] = useSelector(state => state.users)

    const windowWidth = Dimensions.get('window').width;

    return (
        <View style={{ flexDirection: "column" }}>
            <View style={styles.header}>
                <Text style={{
                    marginTop: 25, fontSize: 20,
                    marginLeft: 10, marginBottom: 5
                }}>Attività</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>

                <View
                    style={styles.avatar}
                >
                    <TouchableOpacity>
                        <Image
                            source={{ uri: item.avatar }}
                            style={[item.stories ? styles.storiaTrue : styles.storiaFalse]}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "column" }}>
                        <Text
                            style={{ fontSize: 15, justifyContent: "center" }}
                        >
                            {item.name}
                        </Text>
                        <Text style={{ color: "#808080" }}>Approva o aggiungi le richieste</Text>
                    </View>
                </View>

            </View>

            <Text style={{ margin: 10, fontSize: 20 }}>Oggi</Text>

            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <View
                        style={styles.avatar}
                    >
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.avatar }}
                                style={[item.stories ? styles.storiaTrue : styles.storiaFalse]}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", maxWidth: 120 }}>
                            <Text
                                style={{ fontSize: 15, justifyContent: "center" }}
                            >
                                {item.name} <Text style={{ color: "#808080", }}>ha chiesto di seguirti</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Conf..."></Button>
                        <Button title="Elimina"></Button>
                    </View>
                </View>

            </View>

            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <View
                        style={styles.avatar}
                    >
                        <TouchableOpacity>
                            <Image
                                source={{ uri: item.avatar }}
                                style={[item.stories ? styles.storiaTrue : styles.storiaFalse]}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", maxWidth: 120 }}>
                            <Text
                                style={{ fontSize: 15, justifyContent: "center" }}
                            >
                                {item.name} <Text style={{ color: "#808080", }}>ha chiesto di seguirti</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Conf..."></Button>
                        <Button title="Elimina"></Button>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    storiaTrue: {
        width: 56,
        height: 56,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e60073",
        margin: 5,
    },
    storiaFalse: {
        width: 55,
        height: 55,
        borderRadius: 40,
        margin: 5,
    },
    header: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6"
    },
    buttons: {
        flexDirection: "row",
        height: 30,
        marginLeft: 20,
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10
    }
});

export default Activities