import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Games from "../../components/Games";

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
          <Text style={[styles.text, { color: "#9e9e9e" }]}>NOME JOGO</Text>

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
            onClick={() => navigation.navigate("Details")}
          >
            Orizon TOP
          </Games>
          <Games
            image={require("../../assets/the-witcher-iii-wild-hunt.png")}
            cost="R$70.00"
            onClick={() => alert("eae")}
          >
            The Witcher
          </Games>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },

  header: {
    marginBottom: 8,
  },

  bannerImage: {
    width: "100%",
    height: 145,
    resizeMode: "contain",
  },

  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },

  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    marginHorizontal: "1%",
  },

  filterButton: {
    position: "absolute",
    right: 0,
    alignSelf: "center",
  },

  line: {
    borderBottomColor: "rgba(158, 158, 158, 0.287)",
    borderBottomWidth: 1,
  },

  gamesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
