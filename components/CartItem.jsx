import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet,
  View,
} from 'react-native';
export function CartItem({addedItem,removeItem}) {


   
    
      const renderItem = ({item}) => (
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: 100, height: 100, marginRight: 10}}
          />
          <View style={{flex: 1}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginBottom: 5}}>
              {item.title}
            </Text>
            <Text style={{marginBottom: 5, color: 'black'}}>
              {item.description}
            </Text>
            <Text style={{marginBottom: 5, color: 'black'}}>
              Price: ${item.price}
            </Text>
            <Text style={{marginBottom: 10, color: 'black'}}>
              Quantity: {item.quantity}
            </Text>
            <TouchableButton name="Remove" navigation={navigation} />
          </View>
        </View>
      );
  return (
    <View>
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
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
          Total Items: {addedItem.cart.length}
        </Text>
      </View>
    </View>
  );
}
