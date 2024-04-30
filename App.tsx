import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import MyStore from './reduxtoolkit/MyStore';
import {CartScreen} from './Screen/CartScreen';
import {DetailScreen} from './Screen/DetailScreen';
import {ProductScreen} from './Screen/ProductScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BuyNowScreen} from './Screen/BuyNow';
import Login from './Screen/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
  <Tab.Screen
    name="Product Screen"
    component={ProductScreen}
    options={{
      tabBarIcon: () => (<Icon name="home" size={30} color="black" />),
      tabBarLabel: '' 
    }}
  />
  <Tab.Screen
    name="Cart"
    component={CartScreen}
    options={{
      tabBarIcon: () => (<Icon name="shopping-cart" size={30} color="black" />),
      tabBarLabel: '' 
    }}
  />
</Tab.Navigator>

  );
}

function App() {
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown:false}}
          >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="Cart" component={CartScreen}  />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="BuyNowScreen" component={BuyNowScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
