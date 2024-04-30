import React, { useState } from 'react';
import { View, Text,StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';
import { TouchableButton } from '../components/atoms/Smallbutton';
import { Card } from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';







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

  const filterResultsByCategory = category => {
    
    return results.filter(result => {
      return result.category === category;
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'flex-end' }}>

        <TouchableOpacity style={{ marginBottom: 10, marginRight: 10, alignItems:"center", flexDirection:"row" }} onPress={()=>{navigation.navigate("Cart")}} >
        <Icon name="shopping-cart" size={30} color="rgb(251 146 60)" />
        <Text style={{color:"orange", fontSize:20, marginLeft:5, marginTop:15}} >{addedItem.cart.length}</Text>
        </TouchableOpacity>
        
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
          results={filterResultsByCategory('smartphones')}
          title="Smartphones"
          navigation={navigation}
          addItem={addItem}
        />
        <Card results={filterResultsByCategory('laptops')} title="Laptops" navigation={navigation} addItem={addItem}/>
        <Card
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
