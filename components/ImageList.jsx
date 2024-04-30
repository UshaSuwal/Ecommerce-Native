import React from "react"
import { useState } from "react";
import { Image,ScrollView,View,TouchableOpacity ,StyleSheet} from "react-native";
export function ImageList({product}){
    const [selectedImage, setSelectedImage] = useState(product.thumbnail);
    return(
        <>
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
        </>
    )
}

const styles = StyleSheet.create({
    
    imageContainer: {
        alignItems: "center",
        
      },
      mainImage: {
        width: 300,
        height: 300,
        resizeMode: "contain",
      },
      smallImageContainer: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom:20,
      },
      smallImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
  });
  