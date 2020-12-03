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

  containerButton: {
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#17181a",
    borderRadius: 5,
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontSize: 20,
    color: "#ebe8e8",
    fontFamily: "Roboto_700Bold"
  },
});
