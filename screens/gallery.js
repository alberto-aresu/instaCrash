import React from "react";
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { aumenta, diminuisci } from "../reduxCounter/actions";


const Gallery = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{marginBottom:10}}>Questo è un esempio veloce di contatore fatto con Redux</Text>

            <Text style={{marginBottom:10}}>Contatore {counter}</Text>

            <Button
             style={{marginBottom:20}}
                title="aumenta"
                onPress={() => dispatch(aumenta())} />
            <Button
             style={{marginBottom:20}}
                title="dimiuisci"
                onPress={() => dispatch(diminuisci())} />

        </View>
    )
}

export default Gallery