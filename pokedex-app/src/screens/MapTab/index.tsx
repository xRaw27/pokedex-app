import { StyleSheet, Text, View } from "react-native";

const MapTab = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {"A map will be here soon..."}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f6f8fC",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default MapTab;
