import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native"; //para pegar parametros enviados para este componente

import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { styles } from "./styles";
import dataMock from "../../services/products.json";

export default function Details({ navigation }) {
  const [dataGame, setDataGame] = useState([]);

  const routes = useRoute();
  const { id } = routes.params;

  navigation.setOptions({
    headerTitle: "Detalhes do produto",
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

  // const handleGameItem = useCallback(() => {
  //   if (!filteredItem) {
  //     return;
  //   } else {
  //   }
  // }, []);

  console.log(dataGame);

  return (
    <ScrollView style={styles.container}>
      {dataGame.map((item) => (
        <React.Fragment>
          <View style={styles.productInformation}>
            <Image
              // source={require(`../../assets/${item.image}`)}
              source={require(`../../assets/horizon-zero-dawn.png`)}
              resizeMode="cover"
            />

            <View>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              autem deserunt! Eos minima non odit possimus numquam score:
              <Text style={{ color: "#ad1919" }}>500 </Text>
              blanditiis perspiciatis doloribus officiis eveniet atque
              recusandae excepturi
            </Text>

            <View style={styles.line} />

            {/* <Footer /> */}
          </View>
        </React.Fragment>
      ))}

      <Button />
    </ScrollView>
  );
}
