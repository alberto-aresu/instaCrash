import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native';


class cards extends Component {

    render() {

        return (

            <View style={{ marginLeft: 20, }}>

                <View
                    style={styles.container}
                >
                    <TouchableOpacity>
                        <Image
                            source={{uri:this.props.item.avatar}}
                            style={styles.image}
                        />
                        <Text
                            style={styles.text}
                            numberOfLines={1}
                        >
                            {this.props.item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }

};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#e60073",
        margin: 5,
    },
    text: {
        fontSize: 15,
        justifyContent: "center",
        maxWidth: 90
    }
});

export default cards;