import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectDestination, selectPickup } from "../../screens/slices/navSlice";



import MapView, { Marker } from "react-native-maps";

import tw from "twrnc";

const Map = () => {
  const pickup = useSelector(selectPickup);
  console.log("pickupfromSelector--->",pickup)

  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: pickup?.location?.latitude,
        longitude: pickup?.location?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >

    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
