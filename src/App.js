import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecoilRoot } from 'recoil';

import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './screens/Profile';
import BuyerHomePage from './screens/buyers/BuyerHome';
import SellerHomePage from './screens/sellers/SellerHome';
import BuyerDetailsForm from './components/buyers/BuyerDetailsForm';
import BuyerProductsSearch from './screens/buyers/BuyerProductsSearch';
import BuyerProductDetailScreen from './screens/buyers/BuyerProductDetailScreen';
import SellerEarnings from './screens/sellers/SellerEarnings';
import SellerProductListing from './screens/sellers/SellerProductListing';
import SellerOrderManagement from './screens/sellers/SellerOrderManagement';

const Stack = createNativeStackNavigator();

function RootStack({ initialRouteName }) {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {/* Buyer Screens */}
      <Stack.Screen name="BuyerHome" component={BuyerHomePage} />
      <Stack.Screen name="BuyerProfileSetup" component={BuyerDetailsForm} />
      <Stack.Screen name="BuyerProductsSearch" component={BuyerProductsSearch} />
      <Stack.Screen name="BuyerProductDetailScreen" component={BuyerProductDetailScreen} />

      {/* Seller Screens */}
      <Stack.Screen name="SellerHome" component={SellerHomePage} />
      <Stack.Screen name="SellerEarnings" component={SellerEarnings} />
      <Stack.Screen name="SellerProductListing" component={SellerProductListing} />
      <Stack.Screen name="SellerOrderManagement" component={SellerOrderManagement} />

      {/* Authentication Screens */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />

      {/* Profile Screen */}
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null); // Initial route state

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        // Retrieve user data from AsyncStorage
        const userData = await AsyncStorage.getItem('user-data');
        if (userData) {
          setInitialRoute('BuyerHome'); // If user exists, start at BuyerHome
        } else {
          setInitialRoute('Login'); // If no user, start at Login
        }
      } catch (error) {
        console.error('Error reading user data from AsyncStorage:', error);
        setInitialRoute('Login'); // Default to Login if error occurs
      }
    };

    checkUserLoggedIn();
  }, []);

  // Wait until we determine the initial route
  if (!initialRoute) {
    return null; // Render nothing or a splash screen while checking
  }

  return (
    <NavigationContainer>
      <RecoilRoot>
        <RootStack initialRouteName={initialRoute} />
      </RecoilRoot>
    </NavigationContainer>
  );
}
