import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeCartItem} from '../reduxtoolkit/Slice';
import {CartItem} from '../components/CartItem';

export function CartScreen({navigation}) {
  const addedItem = useSelector(state => state);
  const dispatch = useDispatch();

  const removeItem = item => {
    dispatch(removeCartItem(item));
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: 'rgb(255 237 213)',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            marginVertical: 20,
            color: 'brown',
          }}>
          Your Cart
        </Text>
        <CartItem addedItem={addedItem} removeItem={removeItem} />
      </ScrollView>
      <View
        style={{
          padding: 20,
          backgroundColor: 'rgb(255 237 213)',
          borderTopWidth: 1,
          borderTopColor: '#ddd',

        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 250,
          }}>
          Total Items: {addedItem.cart.length}
        </Text>
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: 'brown',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: -20,
            marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('CheckOut', {addedItem: addedItem});
          }}>
          <Text style={{color: 'white', padding: 5, fontSize: 25}}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
