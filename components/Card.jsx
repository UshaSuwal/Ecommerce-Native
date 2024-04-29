import React from "react"
import { TouchableOpacity, Text,Image,Button,StyleSheet } from "react-native"
export function Card({product, navigation}){
    return(
        <TouchableOpacity key={product.id} style={styles.productContainer} onPress={() => navigation.navigate("DetailScreen", { product: product })}>
              <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.productBrand}>{product.brand}</Text>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <Button title='Add to cart' onPress={() => { addItem(product) }} />
              
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    
    productContainer: {
      backgroundColor: '#fff',
      width: '48%',
      marginBottom: 15,
      borderRadius: 10,
      elevation: 3,
    },
    thumbnail: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    productBrand: {
      marginVertical: 5,
      marginHorizontal: 10,
      color: '#333',
      fontSize: 16,
    },
    productTitle: {
      marginHorizontal: 10,
      marginBottom: 5,
      color: '#666',
    },
    productPrice: {
      marginHorizontal: 10,
      marginBottom: 10,
      color: '#009688',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  