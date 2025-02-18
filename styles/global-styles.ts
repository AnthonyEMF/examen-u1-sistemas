import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  h1: {
    color: Colors.textPrimary,
    fontSize: 32,
    textAlign: "center",
    fontWeight: "400",
    paddingHorizontal: 10,
    marginBottom: 100,
  },

  h2: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "400",
    paddingHorizontal: 10,
    marginBottom: 300,
  },

  button: {
    height: 48,
    width: 45,
    borderRadius: 5,
    justifyContent: "center",
    marginHorizontal: 5,
    borderColor: Colors.textPrimary,
    borderWidth: 2,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.textPrimary,
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: Colors.textPrimary,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    elevation: 3,
  },

  floatingButtonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    width: 12,
    height: 25,
  },

  positionLeft: {
    left: 100,
    bottom: 300,
  },

  positioRight: {
    right: 100,
    bottom: 300,
  },
});
