import React, { useState } from 'react';
import { View, Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';
import { TouchableButton } from '../components/atoms/Smallbutton';
import { Card } from '../components/Card';







export function ProductScreen({ navigation }) {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');
  
  
  const dispatch = useDispatch();
  const addedItem = useSelector(state => state);


  const addItem = (item) => {
    if (item) {
      dispatch(addCartItem(item));
      
    }
  }

  const filterResultsByPrice = price => {
    
    return results.filter(result => {
      return result.category === price;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableButton name="Cart" length={addedItem.cart.length} navigation={navigation} screen="Cart"/>
      </View>
      <SearchBar
        term={term}
        onNewChange={(newValue) => setTerm(newValue)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <ScrollView>
      <Card
          results={results}
          title="All"
          navigation={navigation}
          addItem={addItem}
        />
      <Card
          results={filterResultsByPrice('smartphones')}
          title="Smartphones"
          navigation={navigation}
          addItem={addItem}
        />
        <Card results={filterResultsByPrice('laptops')} title="Laptops" navigation={navigation} addItem={addItem}/>
        <Card
          results={filterResultsByPrice('fragrances')}
          title="Fragrances"
          navigation={navigation}
          addItem={addItem}
        />
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
  
});
