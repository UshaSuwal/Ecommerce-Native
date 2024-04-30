import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ImageList } from "../components/ImageList";
import { Detail } from '../components/Detail';

export function BuyNowScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <ImageList product={product}/>
      
      <View style={styles.detailsContainer}>
      <Detail product={product}/>
        <Text style={styles.price}>Before Discount: ${product.price.toFixed(2)}</Text>
        <Text style={styles.afterprice}>After Discount: ${(product.price.toFixed(2)-((product.discountPercentage/100)*product.price.toFixed(2))).toFixed(2)}</Text>
        <TouchableOpacity style={{width:100,backgroundColor:"brown", alignItems:"center",borderRadius:5}}>
            <Text style={{color:"white", padding:5, fontSize:25}}>Pay Now</Text>
          </TouchableOpacity>
        
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "rgb(255 237 213)",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  afterprice: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  
  
});
