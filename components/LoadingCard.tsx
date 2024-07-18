import React from "react";

import { ActivityIndicator, Text, View } from "react-native";

const LoadingCard = ({ text }: { text?: string }) => (
  <View className="border-[0.9px] flex-shrink w-36 py-8 bg-background">
    <ActivityIndicator color="#6C757D" size="large" />
    <Text className="text-center font-regular pt-2 text-xs text-foreground">
      {text ? text : "Laoding..."}
    </Text>
  </View>
);

export default LoadingCard