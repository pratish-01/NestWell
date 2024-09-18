import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router"; // Make sure Slot is used
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useColorScheme } from "@/hooks/useColorScheme";
import LoginScreen from "./screens/Login";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [isAppReady, setIsAppReady] = useState(false); // Control when app is ready to navigate
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (loaded) {
      // Ensure that everything is loaded before hiding the splash screen
      SplashScreen.hideAsync().then(() => {
        setIsAppReady(true); // App is ready after hiding the splash screen
      });
    }
  }, [loaded]);

  if (!loaded || !isAppReady) {
    return null; // Don't render anything until the app is ready
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {isLoggedIn ? (
          <Slot /> // If logged in, render the Slot (which renders the tabs)
        ) : (
          <LoginScreen setIsLoggedIn={setIsLoggedIn} /> // Show LoginScreen if not logged in
        )}
      </ThemeProvider>
    </Provider>
  );
}
