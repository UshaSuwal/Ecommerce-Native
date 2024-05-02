import React from 'react';
import {
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
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
    <View>
      {addedItem.length === 0 ? (
        <Text style={{color: 'black'}}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={addedItem}
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
        
      </View>
    </View>
  );
}
