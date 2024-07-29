import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen"
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from '@gluestack-ui/themed';
import "react-native-devsettings/withAsyncStorage";

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer theme={theme}>
          <RootStackNavigator/>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
