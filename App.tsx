
import React, { Component } from 'react';

import {Home} from './Screen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductScreen } from './Screen/ProductScreen';

import { Provider } from 'react-redux';
import MyStore from './reduxtoolkit/MyStore';
import { CartScreen} from './Screen/CartScreen';
import { DetailScreen } from './Screen/DetailScreen';



const Stack= createNativeStackNavigator();
function App() {

  return (
    <Provider store={MyStore}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
       
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
     
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )

}




export default App;
