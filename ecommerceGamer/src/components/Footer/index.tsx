import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Games from "../Games";
import { styles } from "./styles";

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.footerTextInformation}>VOCÊ TAMBÉM PODE GOSTAR</Text>

      <View style={styles.recommended}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Games
              onClick={() => navigation.navigate("Details")}
              img={require("../../assets/shards-of-darkness.png")}
              cost="R$60"
              score="40"
            >
              Darkness
            </Games>
          </View>
          <View>
            <Games
              onClick={() => navigation.navigate("Details")}
              img={require("../../assets/super-mario-odyssey.png")}
              cost="R$60"
              score="40"
            >
              Mário
            </Games>
          </View>
          <View>
            <Games
              onClick={() => navigation.navigate("Details")}
              img={require("../../assets/call-of-duty-wwii.png")}
              cost="R$60"
              score="40"
            >
              COD
            </Games>
          </View>
          <View>
            <Games
              onClick={() => navigation.navigate("Details")}
              img={require("../../assets/terra-media-sombras-de-mordor.png")}
              cost="R$60"
              score="40"
            >
              Terra média
            </Games>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
