import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Tabs } from 'expo-router';
import LoginScreen from '../screens/Login';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

return (
    <>
      <Header />
      {/* {!isLoggedIn ? (
        <LoginScreen />
      ):( */}
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#000', // Active Tab Color, set to black or any color you prefer
            headerShown: false, // Hide header
            tabBarStyle: styles.tabBarStyle,  // Apply custom style
          }}
        >
          {/* Home Tab ------------------------------------------------------------------------------------------------------------------*/}
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="home" color={color} />
              ),
            }}
          />

          {/* Custom Centered Scan Tab --------------------------------------------------------------------------------------------------*/}
          <Tabs.Screen
            name="Scanbutton" // Link to the actual Scan file
            options={{
              title: '',
              tabBarIcon: ({ color, focused }) => (
                <View style={styles.scannerContainer}>
                  <View style={styles.scanButton}>
                    <TabBarIcon name="scan1" color="#000" />
                  </View>
                </View>
              ),
              tabBarLabel: () => null,  // Hide label for Scan button
            }}
          />

          {/* Menu Tab --------------------------------------------------------------------------------------------------------------------*/}
          <Tabs.Screen
            name="Menu"
            options={{
              title: 'Menu',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="menufold" color={color} />
              ),
            }}
          />
        </Tabs>
      {/* )} */}
    </>
  );
}

const styles = StyleSheet.create({
  // Custom style for the tab bar-------------------------------------------------------------------------------------------------------
  tabBarStyle: {
    height: 60,
    paddingTop: 10,
    backgroundColor: '#fff',
    position: 'relative',
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -5 },
    elevation: 20, // For Android shadow effect
    
    borderTopWidth: 1, // Optional: if you want to add a border width
    borderTopColor: '#10365B', // Optional: color for the border
  },
  // Style for the centered scan button--------------------------------------------------------------------------------------------------
  scannerContainer: {
    position: 'absolute',
    bottom: 30, // Push the button above the tab bar
    width: 100,
    height: 70,
    borderTopWidth: 30,
    borderRightWidth:50,
    borderLeftWidth: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomColor:'#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,  // Ensure scan button is above the tab bar
  },
  scanButton: {
    position: 'relative',
    width: 70,
    height: 70,
    backgroundColor: '#10365B', // Dark blue background for the scan button
    borderRadius: 40, // Fully rounded button
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height:10 },
    elevation: 5, // For Android shadow effect
  },
});