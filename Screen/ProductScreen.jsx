import React, { useState } from 'react';
import { View, Text,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';

import { Card } from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardCategory } from '../components/CardCategory';
import { CartIcon } from '../components/atoms/CartIcon';


export function ProductScreen({ navigation }) {
  const [results, searchApi, errorMessage] = useSearch();
  const [term, setTerm] = useState('');
  
  
  const dispatch = useDispatch();
  


  const addItem = (item) => {
    if (item) {
      dispatch(addCartItem(item));
      
    }
  }

  const filterResultsByCategory = category => {
    
    return results.filter(result => {
      return result.category === category;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>

        
        <CartIcon navigation={navigation} />
        
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
      <CardCategory
          results={filterResultsByCategory('smartphones')}
          title="Smartphones"
          navigation={navigation}
          addItem={addItem}
        />
        <CardCategory results={filterResultsByCategory('laptops')} title="Laptops" navigation={navigation} addItem={addItem}/>
        <CardCategory
          results={filterResultsByCategory('fragrances')}
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
    backgroundColor: 'rgb(255 237 213)',
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
