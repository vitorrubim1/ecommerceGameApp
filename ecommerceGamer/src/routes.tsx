import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Details from "./pages/Details";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} //remove header
        />

        <Screen
          name="Details"
          component={Details}
          options={{ headerShown: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
