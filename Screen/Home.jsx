import React from 'react';
import { View } from 'react-native';
import { SmallButton } from '../components/atoms/Smallbutton';

export function Home({ navigation }) {
  return (
    <View>
      <SmallButton navigation={navigation} screen="ProductScreen" title="Go to ProductScreen" />
    </View>
  );
}
