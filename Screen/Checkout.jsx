import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export function CheckOut({ route }) {
  const { addedItem } = route.params;

  const totalPriceBeforeDiscount = addedItem.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalPriceAfterDiscount = addedItem.cart.reduce(
    (total, item) =>
      total + (item.price - (item.price * item.discountPercentage) / 100) * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.discount}>Discount: {item.discountPercentage}%</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={{color:'black', fontSize:35, fontWeight: 'bold',marginBottom:20, color:"brown"}}>Checkout</Text>
      <View style={styles.cartContainer}>
        {addedItem.cart.length === 0 ? (
          <Text style={styles.emptyCart}>Your cart is empty</Text>
        ) : (
          <FlatList
            data={addedItem.cart}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price Before Discount: ${totalPriceBeforeDiscount.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total Price After Discount: ${totalPriceAfterDiscount.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"rgb(255 237 213)"
  },
  cartContainer: {
    flex: 1,
  },
  emptyCart: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
  },
  price: {
    marginBottom: 5,
    color: 'black',
  },
  discount: {
    marginBottom: 5,
    color: 'black',
  },
  quantity: {
    marginBottom: 10,
    color: 'black',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
    marginTop: 20,
  },
  totalText: {
    color: 'green',
    marginBottom: 10,
    fontSize: 18,
    fontWeight:'bold'
  },
  checkoutButton: {
    backgroundColor: 'brown',
    padding: 15,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
