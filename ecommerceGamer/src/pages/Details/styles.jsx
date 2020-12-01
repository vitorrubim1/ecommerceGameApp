import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },

  productInformation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
  },

  price: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#9e9e9e",
  },

  productName: {
    fontSize: 30,
    fontFamily: "Roboto_300Light",
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "3%",
    color: "#626262",
  },

  line: {
    borderBottomColor: "rgba(158, 158, 158, 0.287)",
    borderBottomWidth: 1,
    marginVertical: "2%",
  },
});
