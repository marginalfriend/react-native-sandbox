import { Link } from "expo-router";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "@/constants/Images";
import ThemedButton from "@/components/ThemedButton";

import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex flex-col items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] h-full px-4">
          <Image
            source={Images.logoText}
            className="w-[200px] h-[70px]"
            resizeMode="contain"
          />
          <Image
            source={Images.onboarding}
            className="w-[360px] h-[300px]"
            resizeMode="contain"
          />
          <Text className="font-regular px-12">
            "Do not save what is left after spending, but spend what is left
            after saving."
          </Text>
          <Text className="font-thin px-10 text-left mt-1">Warren Buffett</Text>
          <ThemedButton
            text="Get Started"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
