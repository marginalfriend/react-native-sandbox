import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, err] = useFonts({
    "JetBrainsMono-Thin": require("../assets/fonts/JetBrainsMono-Thin.ttf"),
    "JetBrainsMono-ThinItalic": require("../assets/fonts/JetBrainsMono-ThinItalic.ttf"),
    "JetBrainsMono-Light": require("../assets/fonts/JetBrainsMono-Light.ttf"),
    "JetBrainsMono-LightItalic": require("../assets/fonts/JetBrainsMono-LightItalic.ttf"),
    "JetBrainsMono-ExtraLight": require("../assets/fonts/JetBrainsMono-ExtraLight.ttf"),
    "JetBrainsMono-ExtraLightItalic": require("../assets/fonts/JetBrainsMono-ExtraLightItalic.ttf"),
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    "JetBrainsMono-MediumItalic": require("../assets/fonts/JetBrainsMono-MediumItalic.ttf"),
    "JetBrainsMono-SemiBold": require("../assets/fonts/JetBrainsMono-SemiBold.ttf"),
    "JetBrainsMono-SemiBoldItalic": require("../assets/fonts/JetBrainsMono-SemiBoldItalic.ttf"),
    "JetBrainsMono-Bold": require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    "JetBrainsMono-BoldItalic": require("../assets/fonts/JetBrainsMono-BoldItalic.ttf"),
    "JetBrainsMono-ExtraBold": require("../assets/fonts/JetBrainsMono-ExtraBold.ttf"),
    "JetBrainsMono-ExtraBoldItalic": require("../assets/fonts/JetBrainsMono-ExtraBoldItalic.ttf"),
  });

  useEffect(() => {
    if (err) throw err;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, err]);

  if (!fontsLoaded && !err) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
