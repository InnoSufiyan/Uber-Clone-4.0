import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../../components/Map";
import { useDispatch } from "react-redux";

import { setDestination, setPickup } from "../slices/navSlice";


import * as Location from "expo-location";

import tw from "twrnc";

const Dashboard = () => {
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
      console.log(location)
      dispatch(
        setPickup({
          location: location.coords,
        })
      );
      dispatch(setDestination(null));
    })();
  }, []);

  return <Map />;
};

export default Dashboard;

const styles = StyleSheet.create({});
