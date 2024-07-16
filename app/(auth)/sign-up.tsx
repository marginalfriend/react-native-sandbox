import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Images from "@/constants/Images";
import FormField from "@/components/FormField";
import ThemedButton from "@/components/ThemedButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password)
      Alert.alert("Error", "Please fill in all the fields");

    setIsSubmitting(true);

    try {
      const result = await createUser(form.username, form.email, form.password);
      // Set to global state

      router.replace("/home");
    } catch (e: any) {
      Alert.alert("Error", e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="pt-8 h-full">
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <Image
            source={Images.logo}
            className="w-[200px] h-[100px] mx-auto"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-xbold">
            Sign Up to Arkad
          </Text>
          <FormField
            placeHolder="Username"
            title="Username"
            value={form.username}
            handleChange={(e: any) => {
              setForm({ ...form, username: e });
            }}
            formStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            placeHolder="Email"
            title="Email"
            value={form.email}
            handleChange={(e: any) => {
              setForm({ ...form, email: e });
            }}
            formStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            placeHolder="Password"
            title="Password"
            value={form.password}
            handleChange={(e: any) => {
              setForm({ ...form, password: e });
            }}
            formStyles="mt-7"
            keyboardType="default"
          />

          <ThemedButton text="Sign Up" handlePress={handleSubmit} />

          <View className="justify-center pt-5 flex flex-row gap-2">
            <Text className="font-regular">Already have an account?</Text>
            <Link href="/sign-in" className="font-jbold text-highlight">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
