import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../reduxtoolkit/Slice';

const FavoritesScreen = () => {
  const favoriteItems = useSelector(state => state.cart.favoriteItems);
  const dispatch= useDispatch();

  const removeItem=(item)=>{
    dispatch(removeFromFavorites(item));
  }

  const renderItem = ({ item }) => (
    
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.favouriteButton} onPress={()=> {removeItem(item)}}>
        <Text style={styles.favButtonText}>Remove</Text>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favoriteItems.length>0 ?(
        <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      ):(
        <Text style={{color:"black", fontSize:20, marginTop:20}}>Your Favourite is empty</Text>
      )}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(255 237 213)",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"brown",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"black",
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
    color:"black",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    color:"black",
  },
  favouriteButton: {
    marginTop: 20,
    width:100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "green",
  },
  favButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});

export default FavoritesScreen;
