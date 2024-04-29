import React from 'react';
import {View,Button} from 'react-native'


export function Home({navigation}){
return(
<View>
    
<Button  
        onPress={()=> {navigation.navigate("ProductScreen")}}
        title= "Go to ProductScreen"
    />
   
</View>
)}