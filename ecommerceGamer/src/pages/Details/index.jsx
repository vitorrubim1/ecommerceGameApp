import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native"; //para pegar parametros enviados para este componente

import Button from "../../components/Button";
import { styles } from "./styles";
import dataMock from "../../services/products.json";

export default function Details({ navigation }) {
  const [dataGame, setDataGame] = useState([]);

  const routes = useRoute();
  const { id } = routes.params;

  navigation.setOptions({
    headerTitle: `Detalhes do produto`,
  });

  useEffect(() => {
    let filteredItem = dataMock.filter((item) => {
      return item.id === id;
    });

    if (!filteredItem) {
      return;
    } else {
      setDataGame(filteredItem);
    }
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      {dataGame.map((item) => (
        <React.Fragment key={item.id}>
          <View style={styles.productInformation}>
            <Image
              source={{ uri: `${item.image}` }}
              style={{ width: 170, height: 170 }}
            />
            {/* <Text>{item.image}</Text> */}
            <View>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>R${item.price}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.description}>
              The game - {item.name} is a fantastic game, one of the best of the
              new generation, according to players and critics it reached a
              score of <Text style={{ color: "#ad1919" }}>{item.score}</Text>
            </Text>

            <View style={styles.line} />

            <Button />
          </View>
        </React.Fragment>
      ))}
    </ScrollView>
  );
}
