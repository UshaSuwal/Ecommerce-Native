import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';

export function ProductScreen({ navigation }) {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const addedItem = useSelector(state => state);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    if (item) {
      dispatch(addCartItem(item));
      setTotal(total + 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity style={{ color: "black", marginBottom: 10, marginRight: 10, borderRadius: 10, width: 60, backgroundColor: "rgb(50, 160, 255)" }} onPress={() => { navigation.navigate("CartScreen") }}>
          <Text style={{ color: "white", padding: 5, fontSize: 20 }}>Cart {addedItem.cart.length}</Text>
        </TouchableOpacity>
      </View>
      <SearchBar
        term={term}
        onNewChange={(newValue) => setTerm(newValue)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <ScrollView>
        <View style={styles.resultsContainer}>
          {results.map(product => (
            <TouchableOpacity key={product.id} style={styles.productContainer} onPress={() => navigation.navigate("DetailScreen", { product: product })}>
              <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
              <Text style={styles.productBrand}>{product.brand}</Text>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <Button title='Add to cart' onPress={() => { addItem(product) }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  resultsContainer: {
    top: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
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
