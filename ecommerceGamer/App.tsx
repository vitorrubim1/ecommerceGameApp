import "react-native-gesture-handler"; //gestos

import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold,
  });

  if(!fontsLoaded){
    return (
      <AppLoading/>
    );
  }

  return (
    <React.Fragment>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </React.Fragment>
  );
}