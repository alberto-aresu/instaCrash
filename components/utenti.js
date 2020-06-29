import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,

} from 'react-native';
import { Icon } from "react-native-elements";


class utenti extends Component {

    render() {

        return (
            <View>
                <View style={{ flexDirection: "column", }}>

                    <View>
                        <Image
                            source={{ uri: "https://i.pinimg.com/564x/b3/86/27/b38627e2d49e0ea886566ac942b56f67.jpg" }}
                            style={styles.image}
                        />
                        <Text
                            style={{ fontSize: 15, justifyContent: "flex-start", }}
                        >
                            nomePersona {this.props.item.body}
                        </Text>
                    </View>


                </View>

                <View style={{ flexDirection: "row"}}>

                    <View style={styles.leftIcons}>
                        <Icon
                            name='heart'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='comment'
                            type='font-awesome-5'
                            size={30}
                        />
                        <Icon
                            name='paper-plane'
                            type='font-awesome-5'
                            size={30}
                        />
                    </View>
                    <View style={styles.rightIcons}>
                        <Icon
                            name='bookmark'
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
    image: {
        height: 360,
        width: 360,
        resizeMode: "cover"
    },
    leftIcons: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 10,
    },
    rightIcons: {
        flex:2,
        flexDirection: "row-reverse",
        marginLeft:10
    },
});

export default utenti;