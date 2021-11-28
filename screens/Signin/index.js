import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import tw from "twrnc";

import Button from "../../components/Button";

const Signin = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={[tw``, { backgroundColor: "#0D1724", flex: 1 }]}>
        <View
          style={[
            tw`h-0.6/2 rounded-b-3xl pt-20 items-center`,
            { backgroundColor: "#4C4AC1" },
          ]}
        >
          <Text style={tw`text-white text-3xl`}>Sign In!</Text>
          <Text style={tw`text-white p-3 text-center`}>
            Let's get you a Ride..!
          </Text>
        </View>
        <View style={tw`mx-10 mt-10`}>
          <TextInput
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Enter Email"
          />
          <TextInput
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Password"
          />
          <TouchableOpacity
            style={tw`mt-5`}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={tw`text-white`}>Don't have an Account ??</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`absolute bottom-5 w-full justify-center`}>
          <Button textName="Get a Uber Taxi" toNavigate="dashboard" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#0D0D0D",
    borderColor: "#4C4AC1",
    textAlign: "center",
    color: "white",
  },
});
