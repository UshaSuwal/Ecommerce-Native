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
import {LogBox} from 'react-native';
import {CheckOut} from './Screen/Checkout';
import {ToastProvider} from 'react-native-toast-notifications';
import FavoritesScreen from './Screen/Favourite';
import { ViewAll } from './Screen/ViewAll';

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="BuyNowScreen" component={BuyNowScreen} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="FavouriteScreen" component={FavoritesScreen} />
      <Stack.Screen name="ViewAll" component={ViewAll} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ToastProvider>
      <Provider store={MyStore}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
              name="Home"
              component={ProductStack}
              options={{
                tabBarIcon: () => <Icon name="home" size={30} color="black" />,
                tabBarLabel: '',
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartScreen}
              options={{
                tabBarIcon: () => (
                  <Icon name="shopping-cart" size={30} color="black" />
                ),
                tabBarLabel: '',
              }}
            />

            <Tab.Screen
              name="FavouriteScreen"
              component={FavoritesScreen}
              options={{
                tabBarIcon: () => (
                  <Icon name="star" style={{ color:"black"}} size={30}  />
                ),
                tabBarLabel: '',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  );
}

export default App;
