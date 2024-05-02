import React from "react"
import { useSelector } from "react-redux"
import { TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
export function CartIcon({navigation}){
    const addedItem = useSelector(state => state.cart.cartItems);
  
    return(
        <TouchableOpacity style={{ marginBottom: 10, marginRight: 10, alignItems:"center", flexDirection:"row" }} onPress={()=>{navigation.navigate("Cart")}} >
        <Icon name="shopping-cart" size={30} color="rgb(251 146 60)" />
        <Text style={{color:"orange", fontSize:20, marginLeft:5, marginTop:15}} >{addedItem.length}</Text>
        </TouchableOpacity>
    )
}