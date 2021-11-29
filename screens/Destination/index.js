import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../../components/Map";
import { useDispatch } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_APIKEY } from "@env";

import { setDestination, setPickup } from "../slices/navSlice";
import Button from "../../components/Button";
import NavigateCard from "../../components/NavigateCard";
import RideOptionCard from "../../components/RideOptionCard";

import * as Location from "expo-location";

import tw from "twrnc";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Signin";

const Stack = createStackNavigator();

const Destination = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("userlocation-->", location);
      dispatch(
        setPickup({
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
        })
      );
      dispatch(setDestination(null));
    })();
  }, []);

  return (
    <>
      <View style={[tw``, { backgroundColor: "#0D1724", flex: 1 }]}>
        <View style={[tw`h-1.5/2 rounded-b-3xl`]}>
          <Map />
        </View>
        <View style={tw`absolute bottom-5 w-full justify-center`}>
          <GooglePlacesAutocomplete
            placeholder="Choose Destination"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setPickup({
                  location: {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  },
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            listViewDisplayed={true}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
              
          <Button textName="Confirm Ride" toNavigate="destination" />
        </View>
      </View>
    </>
  );
};

export default Destination;

const styles = StyleSheet.create({});
