import React, { useEffect, useState } from "react";
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
    headerTitle: `Product Details`,
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
            <View>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>R${item.price}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.description}>
              The game -
              <Text style={{ fontFamily: "Roboto_700Bold" }}> {item.name} </Text>
              is a fantastic game, one of the best of the new generation,
              according to players and critics it reached a
              <Text style={{ fontFamily: "Roboto_700Bold" }}> score </Text>of
              <Text style={{ color: "#ad1919" }}> {item.score}</Text>
            </Text>

            <View style={styles.line} />

            <Button id={item.id}/>
          </View>
        </React.Fragment>
      ))}
    </ScrollView>
  );
}
