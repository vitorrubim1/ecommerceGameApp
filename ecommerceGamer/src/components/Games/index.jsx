import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

export default function Games(props) {
  function handleFilterDescription(description) {
    if (description < 25) return description;

    return `${description.substring(0, 25)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        // source={require(`../../assets/${props.image}`)}
        source={require(`../../assets/call-of-duty-infinite-warfare.png`)}
        style={styles.gameImage}
      />
      <Text style={styles.gameName}>
        {handleFilterDescription(`${props.children}`)}
      </Text>
      <View opacity={0.5}>
        <Text>{props.cost}</Text>
      </View>

      <View style={styles.score}>
        <Text style={{ fontFamily: "Roboto_700Bold" }}>Score: </Text>
        <Text style={{ color: "#ad1919" }}>{props.score}</Text>
      </View>
    </TouchableOpacity>
  );
}
