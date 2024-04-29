import React from 'react';
import { Button, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = ({ term, onNewChange, onTermSubmit }) => {
  return (
    <View
      style={{
        backgroundColor: 'gray',
        height: 50,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom:20,
      }}>
      <Icon name="search" size={30} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={{ flex: 1, paddingLeft: 10 }}
        value={term}
        onChangeText={(newValue)=>onNewChange(newValue)}
        onEndEditing={onTermSubmit}
      />
      
      
    </View>
  );
};

export default SearchBar;
