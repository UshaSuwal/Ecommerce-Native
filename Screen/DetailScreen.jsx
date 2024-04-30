import React, { useState } from 'react';
import {
  Text,
  View,

  StyleSheet,
  ScrollView,
  TouchableOpacity,
 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';
import { ImageList } from "../components/ImageList";
import { Detail } from '../components/Detail';
import { CartIcon } from '../components/atoms/CartIcon';
import { useToast } from "react-native-toast-notifications";

export function DetailScreen({ route, navigation }) {
  const { product } = route.params;
  const {results} = route.params;
  const dispatch = useDispatch();
  const toast = useToast();


  const addItem = item => {
    if (item) {
      dispatch(addCartItem(item));
      toast.show("Item added to cart successfully", {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
        textColor: "black", 
      });
      
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{alignItems:'flex-end', top:20, marginRight:30}}>
      <CartIcon navigation={navigation}/>
      </View>
      <ImageList product={product}/>
      <View style={styles.detailsContainer}>
        <Detail product={product}/>
        <Text style={styles.price}>${product.price}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addItem(product)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addButton, styles.buyNowButton]}
            onPress={() =>
              navigation.navigate("BuyNowScreen", { product: product,results:results })
            }
          >
            <Text style={styles.addButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(255 237 213)',
  },
  
  detailsContainer: {
    width: '90%',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(254 215 175)',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'brown',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowButton: {
    backgroundColor: "green",
    marginLeft: 10,
  },
});
