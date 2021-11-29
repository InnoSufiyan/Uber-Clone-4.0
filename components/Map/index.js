import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectDestination, selectPickup } from "../../screens/slices/navSlice";

import MapView, { Marker } from "react-native-maps";
import MarkerPic from "../../assets/marker.png";

import tw from "twrnc";

const Map = () => {
  const pickup = useSelector(selectPickup);

  const mapRef = useRef(null);
  console.log("pickupfromSelector--->", pickup);

  useEffect(() => {
    console.log("firstPickup-->", pickup);
    if (!pickup) return;

    console.log("secondPickup-->", pickup);
    if(mapRef.current) {
      console.log("map ref available---->", mapRef.current.fitToSuppliedMarkers)
  }
    mapRef?.current?.fitToCoordinates([pickup], {
      animated: true,
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [pickup]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: pickup?.location?.latitude,
        longitude: pickup?.location?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {pickup?.location && (
        <Marker
          key="123"
          coordinate={{
            latitude: pickup?.location?.latitude,
            longitude: pickup?.location?.longitude,
          }}
          title=""
          description=""
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
