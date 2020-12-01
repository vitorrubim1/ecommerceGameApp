import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { styles } from "./styles";

export default function Details({ navigation }) {
  navigation.setOptions({
    headerTitle: "Detalhes do produto",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productInformation}>
        <Image
          source={require("../../assets/horizon-zero-dawn.png")}
          resizeMode="cover"
        />

        <View>
          <Text style={styles.productName}>Orizon</Text>
        </View>
        <View>
          <Text style={styles.price}>R$ 100.00</Text>
        </View>
      </View>

      <View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, autem
          deserunt! Eos minima non odit possimus numquam score:
          <Text style={{ color: "#ad1919" }}>500 </Text>
          blanditiis perspiciatis doloribus officiis eveniet atque recusandae
          excepturi
        </Text>

        <Button />

        <View style={styles.line} />

        {/* <Footer /> */}
      </View>
    </ScrollView>
  );
}
