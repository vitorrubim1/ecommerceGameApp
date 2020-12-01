import * as React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Games(props) {
  function handleFilterDescription(description) {
    if (description < 25) return description;

    return `${description.substring(0, 25)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.image} style={styles.gameImage} />
      <Text style={styles.gameName}>
        {handleFilterDescription(`${props.children}`)}
      </Text>
      <View opacity={0.5}>
        <Text style={styles.gamePrice}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },

  gameImage: {
    width: 170,
    height: 170,
  },

  gameName: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },

  gamePrice: {},
});
