/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/main/Home/Home.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
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
import Rating from './../screens/main/Home/Rating';
import Search from './../screens/main/Home/Search';
import Notification from './../screens/main/Notification/Notification';
import Order from './../screens/main/Order/Order';
import MyOrderDetails from './../screens/main/Order/MyOrderDetails';
import PrivacyPolicy from './../screens/main/Home/PrivacyPolicy';
import TermsConditions from '../screens/main/Home/TermsConditions.jsx';
import CaptureImage from './../screens/main/Home/CaptureImage';
import Profile from './../screens/main/Profile/Profile';
import PersonalInformation from './../screens/main/Profile/PersonalInformation';
import Support from './../screens/main/Profile/Support';

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
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="TopSelling" component={TopSelling} />
      <Stack.Screen name="SelectedCategorie" component={SelectedCategorie} />
      <Stack.Screen name="CaptureImage" component={CaptureImage} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
      <Stack.Screen name="TryOutFit" component={TryOutFit} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="MyOrderDetail" component={MyOrderDetails} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="DeliveryMethod" component={DeliveryMethod} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="FinalShipping" component={FinalShipping} />
      <Stack.Screen name="Rating" component={Rating} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="Support" component={Support} />
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
        tabBarInactiveTintColor: AppColors.GRAY,
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
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          if (route.name === 'Profile') {
            return <Feather name={iconName} size={size} color={color} />;
          } else {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Orders" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Main;
