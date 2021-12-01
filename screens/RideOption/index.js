import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Map from "../../components/Map";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import car1 from '../../assets/1.png'
import car2 from '../../assets/2.png'
import car3 from '../../assets/3.png'

import { GOOGLE_MAPS_APIKEY } from "@env";

import { setDestination, setPickup } from "../slices/navSlice";
import Button from "../../components/Button";

import * as Location from "expo-location";

import tw from "twrnc";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RideOption = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <View style={[tw``, { backgroundColor: "#0D1724", flex: 1 }]}>
        <View style={[tw`h-1.5/2 rounded-b-3xl`]}>
          <Map />
        </View>
        <View style={tw`absolute bottom-5 w-full justify-center`}>
          <View style={{display: "flex", flexDirection: "row"}}>
            <Image source={car1} />
            <Image source={car1} />
            <Image source={car1} />
          </View>
              
          <Button textName="Select Car" toNavigate="rideoption" />
        </View>
      </View>
    </>
  );
};

export default RideOption;

const styles = StyleSheet.create({});
