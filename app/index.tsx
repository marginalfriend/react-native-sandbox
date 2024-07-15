import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">Notes of Arkad</Text>
			<StatusBar barStyle={"default"} />
			<Link href={"/profile"} style={{color: 'blue'}}>Go to Profile</Link>
		</View>
  );
}