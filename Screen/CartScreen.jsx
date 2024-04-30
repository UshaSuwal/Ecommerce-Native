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
    <View style={{flex: 1, padding: 20, backgroundColor:"rgb(255 237 213)"}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginVertical: 40,
          color: 'brown',
        }}>
        Your Cart
      </Text>
      <CartItem addedItem={addedItem} removeItem={removeItem}/>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft:250}}>
          Total Items: {addedItem.cart.length}
        </Text>
        
    </View>
  );
}
