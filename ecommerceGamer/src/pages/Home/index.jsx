import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Games from "../../components/Games";
import { styles } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.jpg")}
          style={styles.bannerImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>JOGOS</Text>
          <Text style={styles.text}> • </Text>
          <Text style={[styles.text, { color: "#9e9e9e" }]}>
            Filtro aplicado
          </Text>

          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text
          style={[
            styles.text,
            { marginHorizontal: "5%", marginVertical: "3%" },
          ]}
        >
          THE BEST
        </Text>

        <View style={styles.gamesContainer}>
          <Games
            image={require("../../assets/horizon-zero-dawn.png")}
            cost="R$200.00"
            score="500"
            onClick={() => navigation.navigate("Details")}
          >
            Orizon TOP
          </Games>
          <Games
            image={require("../../assets/the-witcher-iii-wild-hunt.png")}
            cost="R$70.00"
            score="500"
            onClick={() => navigation.navigate("Details")}
          >
            The Witcher
          </Games>
        </View>
      </ScrollView>
    </View>
  );
}
