/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/main/Home/Home.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  AppColors,
  responsiveFontSize,
  responsiveHeight,
} from '../utils/index.js';
import ShopCategories from './../screens/main/Home/ShopCategories';
import TopSelling from './../screens/main/Home/TopSelling';
import SelectedCategorie from './../screens/main/Home/SelectedCategorie';
import HomeDetails from './../screens/main/Home/HomeDetails';
import TryOutFit from './../screens/main/Home/TryOutFit';
import Cart from './../screens/main/Home/Cart';
import OrderDetail from './../screens/main/Home/OrderDetail';
import Checkout from './../screens/main/Home/Checkout';
import DeliveryMethod from './../screens/main/Home/DeliveryMethod';
import ShippingAddress from './../screens/main/Home/ShippingAddress';
import PaymentMethod from './../screens/main/Home/PaymentMethod';
import AddNewCard from './../screens/main/Home/AddNewCard';
import AddAddress from './../screens/main/Home/AddAddress';
import FinalShipping from './../screens/main/Home/FinalShipping';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={MyTabs} />
      <Stack.Screen name="ShopCategories" component={ShopCategories} />
      <Stack.Screen name="TopSelling" component={TopSelling} />
      <Stack.Screen name="SelectedCategorie" component={SelectedCategorie} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
      <Stack.Screen name="TryOutFit" component={TryOutFit} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="DeliveryMethod" component={DeliveryMethod} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="FinalShipping" component={FinalShipping} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontSize: responsiveFontSize(1.7) },
        tabBarActiveTintColor: AppColors.lightBlue,
        tabBarInactiveTintColor: AppColors.WHITE,
        tabBarStyle: {
          height: responsiveHeight(10),
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderTopWidth: 2,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderTopColor: AppColors.lightBlue,
          paddingTop: responsiveHeight(0.5),
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'explore' : 'explore';
          }

          if (route.name === 'Wallet') {
            return <Ionicons name={iconName} size={size} color={color} />;
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}

export default Main;
