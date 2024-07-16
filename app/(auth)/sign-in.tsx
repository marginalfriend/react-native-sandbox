import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";
import React from "react";
import Images from "@/constants/Images";

const SignIn = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={Images.logo}
            className="w-[200px] h-[50px]"
            resizeMode="contain"
          />
					<Text className="text-2xl font-xbold">Log in to Arkad</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
