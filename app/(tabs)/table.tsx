import React from "react";
import { View,SafeAreaView, ScrollView, Text } from "react-native";

const Table = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <Text>Table</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Table;
