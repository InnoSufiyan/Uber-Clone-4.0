import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

import Button from "../../components/Button";
import carImage from "../../assets/2017-volkswagen-gti-se-5door-hatchback-front-view.png";
import logo from "../../assets/2560px-Uber_logo_2018.svg.png";

const Splash = ({ navigation }) => {
  return (
    <View style={[tw``, { backgroundColor: "#0D1724", flex: 1 }]}>
      <View
        style={[
          tw`h-1.6/2 rounded-b-3xl p-10 items-center`,
          { backgroundColor: "#4C4AC1" },
        ]}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            tintColor: "white",
          }}
          source={logo}
        />
        <Text style={tw`text-white text-lg`}>Get There</Text>
        <Image
          style={{ position: "absolute", top: 200, left: 50 }}
          source={carImage}
        />
      </View>
      <View style={tw`absolute bottom-5 w-full justify-center`}>
        <Button textName="Getting Started" toNavigate="signin"/>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
