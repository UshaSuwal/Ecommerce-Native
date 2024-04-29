import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export function DetailScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.description}>Category: {product.category}</Text>
        <Text style={styles.description}>Discount(%): {product.discountPercentage}</Text>
        <Text style={styles.description}>Stock: {product.stock}</Text>
        
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 50,
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color:"black",
  },
  brand: {
    fontSize: 16,
    marginBottom: 10,
    color:"black",
  },
  description: {
    marginBottom: 10,
    color:"black",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    
  },
});
