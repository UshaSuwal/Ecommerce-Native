import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/Slice';

export function DetailScreen({ route, navigation }) {
  const { product } = route.params;
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false); // State to track whether item is added to cart
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  const addItem = item => {
    if (item) {
      dispatch(addCartItem(item));
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 1100);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedImage }} style={styles.mainImage} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {product.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImage(image)}
              style={styles.smallImageContainer}
            >
              <Image
                source={{ uri: image }}
                style={styles.smallImage}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.info}>{product.category}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Discount(%):</Text>
          <Text style={styles.info}>{product.discountPercentage}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Stock:</Text>
          <Text style={styles.info}>{product.stock}</Text>
        </View>

        <Text style={styles.price}>${product.price}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addItem(product)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addButton, styles.buyNowButton]}
            onPress={() =>
              navigation.navigate("BuyNowScreen", { product: product })
            }
          >
            <Text style={styles.addButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 50 }}>
          {addedToCart && (
            <Text style={{ color: 'green', marginTop: 5 }}>
              Successfully added to cart
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop:20,
  },
  smallImageContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop:20,
  },
  smallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    width: '90%',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  brand: {
    fontSize: 18,
    marginBottom: 15,
    color: '#666',
  },
  descriptionContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    color: '#666',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  info: {
    marginLeft: 5,
    color: '#666',
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
    backgroundColor: "green",
    marginLeft: 10,
  },
});
