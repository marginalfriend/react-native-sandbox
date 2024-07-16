import ThemedButton from "@/components/ThemedButton";
import Images from "@/constants/Images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Redirect, router } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

	if (!isLoading && isLoggedIn) return <Redirect href="/home"/>
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
          <Text className="text-2xl font-jbold text-left mr-auto pl-6 my-0 py-0 h-min">
            "
          </Text>
          <Text className="font-regular px-12">
            Do not save what is left after spending, but spend what is left
            after saving.
          </Text>
          <Text className="text-2xl font-jbold text-left ml-auto pr-6 my-0 py-0 h-min">
            "
          </Text>
          <Text className="font-regular text-foreground px-10 text-left">
            Warren Buffett
          </Text>
          <ThemedButton
            text="Get Started"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
