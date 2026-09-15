import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
        <Button onPress={() => console.log("Alert Button pressed.")} title="Alert"/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
