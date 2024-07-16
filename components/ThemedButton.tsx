import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

export type ButtonProps = {
  isLoading?: boolean;
  buttonStyle?: string;
  textStyle?: string;
  text: string;
  handlePress: VoidFunction;
};

const ThemedButton = ({
  isLoading,
  text,
  handlePress,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-highlight px-6 py-4 mt-10 ${
        isLoading ? "opacity-50" : ""
      } ${buttonStyle}`}
      activeOpacity={0.6}
    >
      <Text
        className={`font-regular text-white text-[16px] text-center ${textStyle}`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemedButton;
