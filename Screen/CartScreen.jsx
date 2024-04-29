import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../reduxtoolkit/Slice';

export function CartScreen() {
  const addedItem = useSelector(state => state);
  const dispatch = useDispatch();
  
  const removeItem = item => {
    dispatch(removeCartItem(item));
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
      <Image
        source={{ uri: item.thumbnail }}
        style={{ width: 100, height: 100, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 5 }}>
          {item.title}
        </Text>
        <Text style={{ marginBottom: 5,color: 'black' }}>{item.description}</Text>
        <Text style={{ marginBottom: 5,color: 'black' }}>Price: ${item.price}</Text>
        <Text style={{ marginBottom: 10,color: 'black' }}>Quantity: {item.quantity}</Text>
        <TouchableOpacity
          onPress={() => removeItem(item)}
          style={{
            backgroundColor: 'rgb(50, 160, 255)',
            width:70,
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', fontSize: 16 , padding:10}}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20,color: 'black' }}>
        Your Cart
      </Text>
      {addedItem.cart.length === 0 ? (
        <Text style={{color: 'black'}}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={addedItem.cart}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          paddingTop: 20,
          marginTop: 20,
          alignItems: 'flex-end',
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold',color: 'black' }}>
          Total Items: {addedItem.cart.length}
        </Text>
      </View>
    </View>
  );
}
