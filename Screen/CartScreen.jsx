import React from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeCartItem} from '../reduxtoolkit/Slice';

import { CartItem } from '../components/CartItem';

export function CartScreen({navigation}) {
  const addedItem = useSelector(state => state);
  const dispatch = useDispatch();

  const removeItem = item => {
    dispatch(removeCartItem(item));
  };


  return (
    <View style={{flex: 1, padding: 20}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          color: 'black',
        }}>
        Your Cart
      </Text>
      <CartItem addedItem={addedItem} removeItem={removeItem}/>
    </View>
  );
}
