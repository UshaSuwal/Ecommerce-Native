import React from "react";
import { View, Text } from "react-native";
import { Card } from "./Card";

export function Suggest({ results, product ,navigation}) {

  const filteredResults = results.filter(
    (item) => item.category === product.category   );
  return (
    <View style={{paddingLeft:15, marginTop:20}}>
      
        <Card results={filteredResults} title={"More Similar Products"} navigation={navigation}/>
    
    </View>
  );
}
