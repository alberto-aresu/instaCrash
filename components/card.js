import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';


class cards extends Component {

    render() {

        return (

            <View style={{ flexDirection: "row", marginLeft: 20,}}>

                <View
                    style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", }}
                >
                    <Image
                        source={{ uri: "https://i.pinimg.com/564x/6e/b6/3c/6eb63c55a0f3c10ae5dd9f71a2377d4d.jpg" }}
                        style={styles.image}
                    />
                    <Text
                        style={{ fontSize: 15, justifyContent: "center", maxWidth: 90 }}
                        numberOfLines={1}
                    >
                        {this.props.item.title}
                    </Text>
                </View>

            </View>
        );

    }

};

const styles = StyleSheet.create({
    image: {
        width: 56,
        height: 56,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#e60073",
        margin: 5,
    }
});

export default cards;