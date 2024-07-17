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
import { Link, Redirect, router } from "expo-router";
import { getCurrentUser, signIn } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
	  const { isLoading, isLoggedIn } = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
		
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const handleSubmit = async () => {
    if (!form.email || !form.password)
      Alert.alert("Error", "Please fill in all the fields");

    setIsSubmitting(true);

    try {


      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result)
			setIsLoggedIn(true)
      router.replace("/home");

    } catch (e: any) {

      Alert.alert("Error", e.message);

    } finally {

      setIsSubmitting(false);

    }
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full justify-center h-full min-h-[85vh] px-4 my-6">
          <Image
            source={Images.logo}
            className="w-[200px] h-[100px] mx-auto"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-xbold">
            Log in to Arkad
          </Text>
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

          <ThemedButton text="Sign In" handlePress={handleSubmit} />

          <View className="justify-center pt-5 flex flex-row gap-2">
            <Text className="font-regular">Don't have an account?</Text>
            <Link href="/sign-up" className="font-jbold text-highlight">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
