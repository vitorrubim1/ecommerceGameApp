import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Games from "../../components/Games";
import { styles } from "./styles";
import dataMock from "../../services/products.json";

export default function Home() {
  const [dataGame, setDataGame] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    setDataGame(dataMock);
  }, []);

  function handleNavigateToDetails(id) {
    navigation.navigate("Details", { id });
  }

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
          {dataGame.map((item) => (
            <Games
              key={item.id}
              image={`${item.image}`}
              cost={`R${item.price}`}
              score={`${item.score}`}
              onClick={() => handleNavigateToDetails(item.id)}
            >
              {item.name}
            </Games>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
