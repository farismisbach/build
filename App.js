import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font'
import { createStackNavigator } from '@react-navigation/stack';
import "./global.css"

import StartScreen from './app/screens/StartScreen';
import LoginScreens from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import CameraScreen from './app/screens/CameraScreen';
import CalendarScreen from './app/screens/CalendarScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

function MainTabNavigator() {
    return(
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconStyle = { width: 40, height: 40};

            if(route.name === 'HomeScreen') {
              iconName = focused ? require('./assets/items/home-active.png') : require('./assets/items/home.png');
              iconStyle = {...iconStyle};
            } else if (route.name === 'CameraScreen') {
              iconName = focused ? require('./assets/items/dumble-active.png') : require('./assets/items/dumble.png');
              iconStyle = {...iconStyle, width: 56, height: 56};
            } else if (route.name === 'CalendarScreen') {
              iconName = focused ? require('./assets/items/calendar-active.png') : require('./assets/items/calendar.png');
              iconStyle = {...iconStyle};
            }

            return(<Image source={iconName} style={iconStyle} resizeMode='contain'/>)
          },
          headerShown: false,
          tabBarLabel: () => null,
          tabBarStyle: { backgroundColor: 'black', height: 70, paddingTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        })}
      >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          tabBarStyle: { display: 'none' }, // Hides the tab bar on CameraScreen
        }}
      />
      <Tab.Screen name="CalendarScreen" component={CalendarScreen} />
      </Tab.Navigator>
    )
}


export default function App() {

  const [loaded, error] = useFonts({
    'Poppins-Regular': require("./assets/fonts/Poppins-Regular.ttf"),
    'Poppins-Bold': require("./assets/fonts/Poppins-Bold.ttf"),
    'Poppins-SemiBold': require("./assets/fonts/Poppins-SemiBold.ttf"),
    'Poppins-Medium': require("./assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreens} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}