import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl font-xbold">Notes of Arkad</Text>
			<StatusBar barStyle={"default"} />
			<Link href="/home" style={{color: 'blue'}}>Home</Link>
		</View>
  );
}