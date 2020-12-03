import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Button() {
  function handleInsertCart() {
    alert("hello");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleInsertCart}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}
