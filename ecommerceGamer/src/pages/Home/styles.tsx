import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginVertical: "5%",
  },
});
