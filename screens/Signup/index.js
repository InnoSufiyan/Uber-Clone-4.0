import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createUser, signInUser } from "../../config/firebase";

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

const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function signupHandler() {
    console.log("clicked signup");
    console.log(name, fatherName, mobileNumber, email, password);
    await createUser(name, fatherName, mobileNumber, email, password)
    navigation.navigate('signin')
  }

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
          <Text style={tw`text-white text-3xl`}>Sign Up!</Text>
          <Text style={tw`text-white p-3 text-center`}>
            Please fill your details below to complete your account
          </Text>
        </View>
        <View style={tw`mx-10 mt-10`}>
          <TextInput
            onChangeText={setName}
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Full Name"
          />
          <TextInput
            onChangeText={setfatherName}
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Father's Name"
          />
          <TextInput
            onChangeText={setmobileNumber}
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Mobile Number"
          />
          <TextInput
            onChangeText={setemail}
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Email"
          />
          <TextInput
            onChangeText={setpassword}
            style={[styles.input, tw`border-b text-lg mt-5`]}
            placeholderTextColor="white"
            placeholder="Password"
          />
          <TouchableOpacity
            style={tw`mt-5`}
            onPress={() => navigation.navigate("signin")}
          >
            <Text style={tw`text-white`}>Already have an Account ??</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            tw`fixed top-20 w-full justify-center rounded-2xl py-4`,
            { backgroundColor: "#4C4AC1" },
          ]}
        >
          <TouchableOpacity onPress={signupHandler}>
            <Text style={tw`text-white text-center text-lg`}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#0D0D0D",
    borderColor: "#4C4AC1",
    textAlign: "center",
    color: "white",
  },
});
