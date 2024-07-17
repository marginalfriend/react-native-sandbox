import FormField from "@/components/FormField";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

const Create = () => {
  const [form, setForm] = useState({
    subject: "",
    value: 0,
  });

  // Value Handlers
  const [formattedValue, setFormattedValue] = useState("");

  const handleValueChange = (text: string) => {
    if (!text) {
      setFormattedValue("");
      return;
    }

    const numericValue = text.replace(/[^0-9]/g, "");
    setForm({ ...form, value: parseInt(numericValue) });

    const formatted = formatNumber(numericValue);
    setFormattedValue(formatted);
  };

  const formatNumber = (value: string) => {
    return parseInt(value).toLocaleString();
  };

  // Subject Handlers
  const handleSubjectValue = (e: string) => {
    setForm({ ...form, subject: e });
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <Text className="text-center text-2xl font-xbold">
            + Create New Entry
          </Text>
          <FormField
            placeHolder="Rent"
            title="Subject"
            value={form.subject}
            handleChange={handleSubjectValue}
            formStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            placeHolder="1,000,000"
            title="Value"
            value={formattedValue}
            handleChange={handleValueChange}
            formStyles="mt-7"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
