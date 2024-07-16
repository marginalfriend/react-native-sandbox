import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from 'react'

export type ButtonProps = {
	text: string;
	props?: TouchableOpacityProps
}

const ThemedButton = ({text, ...props}: ButtonProps) => {
	return (
    <TouchableOpacity className="bg-highlight px-4 py-2 mt-10">
      <Text className="font-semibold text-white">{text}</Text>
    </TouchableOpacity>
  );
}

export default ThemedButton