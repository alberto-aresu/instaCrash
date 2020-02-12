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

            <View style={{ flexDirection: "row", marginLeft: 20, }}>

                <View
                    style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", }}
                >
                    <TouchableOpacity>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                            style={styles.image}
                        />
                        <Text
                            style={{ fontSize: 15, justifyContent: "center", maxWidth: 90 }}
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
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#e60073",
        margin: 5,
    }
});

export default cards;