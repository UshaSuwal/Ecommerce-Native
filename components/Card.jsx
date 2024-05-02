import React from "react";
import { TouchableOpacity, Text, Image, Button, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { addCartItem } from "../reduxtoolkit/Slice";
import { useToast } from "react-native-toast-notifications";
export function Card({ results, navigation, title }) {

  const dispatch = useDispatch();
  const toast = useToast();
  const addItem = (item) => {
    if (item) {
      dispatch(addCartItem(item));
      toast.show("Item added to cart successfully", {
        type: "success",
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "zoom-in",
        textColor: "black", 
      });
    }
  }
  if (!results.length) {
    return null;
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
        <View>
          
        <FlatList
          
          data={results}
          keyExtractor={result => result.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.productContainer, styles.verticalProduct]}
              onPress={() =>
                navigation.navigate("DetailScreen", { product: item, results:results })
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
    width: (Dimensions.get('window').width - 60) / 2, 
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    marginHorizontal: 5, 
  },
  horizontalProduct: {
    marginRight: 10,
  },
  verticalProduct: {
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 100, 
    marginBottom: 5,
    resizeMode: "cover",
  },
  productBrand: {
    fontSize: 12, 
    fontWeight: "bold",
    marginBottom: 3, 
    color: "black",
  },
  productTitle: {
    fontSize: 10, 
    marginBottom: 3, 
    color: "black",
  },
  productPrice: {
    fontSize: 14, 
    fontWeight: "bold",
    color: "green",
    marginBottom: 5, 
  },
});