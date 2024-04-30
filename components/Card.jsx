import React from "react";
import { TouchableOpacity, Text, Image, Button, StyleSheet, View, FlatList, Dimensions } from "react-native";

export function Card({ results, navigation, addItem, title }) {
  if (!results.length) {
    return null;
  }

  

  return (
    <View style={styles.container}>
      {title === "All" && <Text style={styles.title}>All</Text>}
      {title !== "All" ? (
        <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.productContainer, styles.horizontalProduct]}
              onPress={() =>
                navigation.navigate("DetailScreen", { product: item })
              }
            >
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.productBrand}>{item.brand}</Text>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Button title="Add to Cart" onPress={() => addItem(item)} />
            </TouchableOpacity>
          )}
        />
        </View>
      ) : (
        <View>
          
        <FlatList
          horizontal={false}
          data={results}
          keyExtractor={result => result.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.productContainer, styles.verticalProduct]}
              onPress={() =>
                navigation.navigate("DetailScreen", { product: item })
              }
            >
              <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.productBrand}>{item.brand}</Text>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Button title="Cart+" onPress={() => addItem(item)} />
            </TouchableOpacity>
          )}
        />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: "black",
  },
  productContainer: {
    backgroundColor: "rgb(254 215 175)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: (Dimensions.get('window').width - 60) / 3, // Adjust width dynamically based on screen width
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    marginHorizontal: 5, // Add horizontal margin for gap between cards
  },
  horizontalProduct: {
    marginRight: 10,
  },
  verticalProduct: {
    marginBottom: 10,
  },
  thumbnail: {
    width: 100, // Adjust thumbnail width
    height: 100, // Adjust thumbnail height
    marginBottom: 5,
    resizeMode: "cover",
  },
  productBrand: {
    fontSize: 12, // Reduce font size
    fontWeight: "bold",
    marginBottom: 3, // Reduce margin bottom
    color: "black",
  },
  productTitle: {
    fontSize: 10, // Reduce font size
    marginBottom: 3, // Reduce margin bottom
    color: "black",
  },
  productPrice: {
    fontSize: 14, // Reduce font size
    fontWeight: "bold",
    color: "green",
    marginBottom: 5, // Reduce margin bottom
  },
});