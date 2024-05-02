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
import { Header } from '@react-navigation/elements';
import { CartIcon } from './components/atoms/CartIcon';




LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{
      headerRight: () => (
        <CartIcon navigation={navigation} />
      )
    }}>
      <Stack.Screen 
        name="ProductScreen" 
        component={ProductScreen} 
        
      />
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
          <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor:"brown"}}>
            <Tab.Screen
              name="Home"
              component={ProductStack}
              options={{
                tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
                tabBarLabel: '',
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="shopping-cart" size={30} color={color} />
                ),
                tabBarLabel: '',
              }}
            />

            <Tab.Screen
              name="FavouriteScreen"
              component={FavoritesScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <Icon name="star"  size={30} color={color}  />
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
