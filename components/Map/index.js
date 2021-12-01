import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectDestination, selectPickup } from "../../screens/slices/navSlice";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import MarkerPic from "../../assets/marker.png";
import { GOOGLE_MAPS_APIKEY } from "@env";

import tw from "twrnc";

const Map = () => {
  const pickup = useSelector(selectPickup);
  const destination = useSelector(selectDestination);

  const mapRef = useRef(null);
  console.log("pickupfromSelector--->", pickup);

  useEffect(() => {
    console.log("firstPickup-->", pickup);
    if (!pickup || !destination) return;

    console.log("secondPickup-->", pickup);
    if(mapRef.current) {
      console.log("map ref available---->", mapRef.current.fitToSuppliedMarkers)
  }
    mapRef?.current?.fitToSuppliedMarkers(['pickup', 'destination'], {
      animated: true,
      edgePadding: { top: 200, right: 200, bottom: 200, left: 200 },
    });
  }, [pickup, destination]);

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
      {pickup && destination && (
        <MapViewDirections
          lineDashPattern={[0]}
          origin={pickup?.description}
          destination={destination?.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {pickup?.location && (
        <Marker
          key="123"
          coordinate={{
            latitude: pickup?.location?.latitude,
            longitude: pickup?.location?.longitude,
          }}
          title=""
          description=""
          identifier="pickup"
        />
      )}
      {destination?.location && (
        <Marker
          key="456"
          coordinate={{
            latitude: destination?.location?.latitude,
            longitude: destination?.location?.longitude,
          }}
          title=""
          description=""
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
