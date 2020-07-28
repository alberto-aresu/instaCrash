import React, { useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import sagaActions from "../redux/saga/sagaActions";


const Gallery = () => {

  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery</Text>
      <Text></Text>
      <Button title="CATCH DATA"
      onPress={() => {dispatch({type: sagaActions.FETCH_DATA_SAGA})}}
      />
    </View>
  )
}

export default Gallery