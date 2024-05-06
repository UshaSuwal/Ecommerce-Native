import React, { useState } from 'react';
import { Image, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

export function ImageList({ product }) {
  const [selectedImage, setSelectedImage] = useState("");
  const imageWidth = 230;
  const imageSpacing = 80;
  const totalImageWidth = imageWidth + imageSpacing;
  let c=0

  return (
    <View style={styles.imageContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={totalImageWidth}
        decelerationRate="fast"
        snapToAlignment="center"
      >
        {product.images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            {selectedImage ? (
              c=c+1
              (c>=2)?(
                <Image source={{ uri: image }} style={styles.mainImage} />
              ):(
                <Image source={{ uri: selectedImage }} style={styles.mainImage} />
              )
              
            ) : (
              <Image source={{ uri: image }} style={styles.mainImage} />
            )}
          </View>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {product.images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedImage(image);
            }}
            style={styles.smallImageContainer}
          >
            <Image source={{ uri: image }} style={styles.smallImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 40,
  },
  mainImage: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
    marginBottom: -30,
    marginTop: 15,
  },
  smallImageContainer: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 40,
  },
  smallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
