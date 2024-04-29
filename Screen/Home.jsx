import React, { useState } from 'react';
import { View, Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';
import { TouchableButton } from '../components/atoms/Smallbutton';
import { Card } from '../components/Card';

export function Home({ navigation }) {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');
  
  
  const dispatch = useDispatch();
  const addedItem = useSelector(state => state);


  const addItem = (item) => {
    if (item) {
      dispatch(addCartItem(item));
      
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableButton name="Cart" length={addedItem.cart.length} navigation={navigation}/>
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
            <Card product={product} navigation={navigation} addItem={addItem}/>
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
