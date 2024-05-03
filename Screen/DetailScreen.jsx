import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addCartItem,
  addToFavorites,
  removeFromFavorites,
} from '../reduxtoolkit/Slice';
import {ImageList} from '../components/ImageList';
import {Detail} from '../components/Detail';

import {useToast} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/FontAwesome';

export function DetailScreen({route, navigation}) {
  const {product} = route.params;
  const {results} = route.params;
  const dispatch = useDispatch();
  const toast = useToast();
  const favorites = useSelector(state => state.cart.favoriteItems);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(favorite => favorite.id === product.id));
  }, [favorites, product]);

  const addItem = (item, quantityNum) => {
    if (item) {
      dispatch(addCartItem({...item, quantity: quantityNum}));
      toast.show('Item added to cart successfully', {
        type: 'success',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    }
  };

  const onCheckLimit = value => {
    const parsedQty = Number.parseInt(value);
    if (Number.isNaN(parsedQty) || parsedQty == 0) {
      setQuantity(1);
      toast.show('Quantity cant be 0', {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    } else if (parsedQty > product.stock) {
      setQuantity(product.stock);
      toast.show('Exceeded stock', {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    } else {
      setQuantity(parsedQty);
    }
  };

  const addToFavoritesHandler = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
      setIsFavorite(false);
      toast.show('Item removed from favorites', {
        type: 'success',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    } else {
      dispatch(addToFavorites(product));
      setIsFavorite(true);
      toast.show('Item added to favorites', {
        type: 'success',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast.show('Exceeded stock', {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
        textColor: 'black',
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageList product={product} />
      <View style={styles.detailsContainer}>
        <Detail product={product} />
        <Text style={styles.price}>${product.price}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}>
            <Icon name="minus" style={styles.quantityIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={quantity.toString()}
            onChangeText={newValue => onCheckLimit(newValue)}
            keyboardType="numeric"
            editable={false} 
          />

          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}>
            <Icon name="plus" style={styles.quantityIcon} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addItem(product, quantity)}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addButton, styles.buyNowButton]}
            onPress={() =>
              navigation.navigate('BuyNowScreen', {
                product: product,
                results: results,
                quantity: quantity,
              })
            }>
            <Text style={styles.addButtonText}>Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={addToFavoritesHandler}
            style={{marginTop: 23, marginLeft: 60}}>
            <Icon
              name="star"
              style={{
                color: isFavorite ? 'rgb(245 158 11)' : 'rgb(148 163 184)',
                fontSize: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'rgb(255 237 213)',
  },
  detailsContainer: {
    width: '90%',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(254 215 175)',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'brown',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowButton: {
    backgroundColor: 'green',
    marginLeft: 10,
  },
  quantityInput: {
    color: 'black',
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    width: 50,
  },
  quantityButton: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityIcon: {
    fontSize: 20,
    color: 'brown',
  },
});

export default DetailScreen;
