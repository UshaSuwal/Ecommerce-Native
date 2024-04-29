import React from 'react';
import { TouchableOpacity,Text,Button } from 'react-native';

export function SmallButton({ title, screen, navigation }) {
  return (
    <Button title={title} onPress={() => { navigation.navigate(screen) }} />
  );
}

export function TouchableButton({ name,length,navigation }) {
  return (
    <TouchableOpacity style={{ color: "black", marginBottom: 10, marginRight: 10, borderRadius: 10, width: 80, backgroundColor: "rgb(50, 160, 255)", alignItems:"center" }} onPress={() => { navigation.navigate("CartScreen") }}>
          <Text style={{ color: "white", padding: 5, fontSize: 20 }}>{name} {length}</Text>
        </TouchableOpacity>
  );
}
