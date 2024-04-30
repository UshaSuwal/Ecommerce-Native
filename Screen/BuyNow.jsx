import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export function BuyNowScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={[styles.buttonText, styles.blackText]}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={[styles.buttonText, styles.whiteText]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageListContainer}>
        {product.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.imageList} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000", 
  },
  brand: {
    fontSize: 18,
    marginBottom: 10,
    color: "#666", 
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#000", // Black text color
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "green",
  },
  buyNowButton: {
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 16,
  },
  blackText: {
    color: "#000", 
  },
  whiteText: {
    color: "#fff", 
  },
  imageListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageList: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
