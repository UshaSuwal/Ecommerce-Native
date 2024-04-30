import React from "react";
import { Text,View,StyleSheet } from "react-native";
export function Detail({product}) {
  return (
    <>
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

      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgb(2 132 199)',
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
    backgroundColor: 'green',
    marginLeft: 10,
  },
});
