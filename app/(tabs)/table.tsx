import { useGlobalContext } from "@/context/GlobalProvider";
import { formatToRupiah } from "@/lib/utils";
import React from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Entry } from "./create";

const EntryView = ({ subject, value }: Entry) => {
  return (
    <View className="flex flex-row w-full px-2 py-4 my-1 border justify-between align-middle">
      <Text className="font-jsemibold">{subject}</Text>
      <Text className="font-jsemibold">{formatToRupiah(value)}</Text>
    </View>
  );
};

const Table = () => {
  const { list } = useGlobalContext();
  return (
    <SafeAreaView className="h-full">
			<Text className="px-5 pt-10 pb-4 text-2xl font-jsemibold bg-background">Entries</Text>
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <EntryView subject={item.subject} value={item.value} />
            )}
            keyExtractor={(entry) => entry.subject}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Table;
