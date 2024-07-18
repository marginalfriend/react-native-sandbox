import LoadingCard from "@/components/LoadingCard";
import { getAllCashflows } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { formatToRupiah } from "@/lib/utils";
import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	Text,
	View
} from "react-native";
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
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading, data:entries, refetch } = useAppwrite(getAllCashflows);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-full">
      <Text className="px-5 pt-10 pb-4 text-2xl font-jsemibold bg-background">
        Entries
      </Text>
        <View className="w-full justify-center items-center h-full min-h-[85vh] my-2 px-2 flex-1">
          {isLoading ? (
            <LoadingCard text="Loading cashflows..." />
          ) : (
            <FlatList
              data={entries}
              renderItem={({ item }) => (
                <EntryView subject={item.subject} value={item.value} />
              )}
              keyExtractor={(entry) => entry.subject}
            />
          )}
        </View>
    </SafeAreaView>
  );
};

export default Table;
