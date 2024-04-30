import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ImageList } from "../components/ImageList";
import { Detail } from '../components/Detail';
import { Suggest } from "../components/Suggest";
import { CartIcon } from "../components/atoms/CartIcon";

export function BuyNowScreen({ route ,navigation}) {
  const { product } = route.params;
  const {results}=route.params;

  return (
    <>
    <View style={styles.cartIconContainer}>
        <CartIcon navigation={navigation}/>
      </View>
    <ScrollView contentContainerStyle={styles.container}>
      
      <ImageList product={product}/>
      
      <View style={styles.detailsContainer}>
        <Detail product={product}/>
        <Text style={styles.price}>Before Discount: ${product.price.toFixed(2)}</Text>
        <Text style={styles.afterprice}>After Discount: ${(product.price.toFixed(2)-((product.discountPercentage/100)*product.price.toFixed(2))).toFixed(2)}</Text>
        <TouchableOpacity style={{width:200,backgroundColor:"brown", alignItems:"center",borderRadius:5}}>
            <Text style={{color:"white", padding:5, fontSize:24}}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
      <Suggest results={results} product={product} navigation={navigation}/>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "rgb(255 237 213)",
    marginTop:30,
  },
  cartIconContainer: {
    position: 'absolute',
    paddingTop: 30,
    paddingRight:30,
    zIndex: 999, 
    width: '100%',
    
    alignItems:'flex-end',
    backgroundColor:"rgb(255 237 213)",
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
