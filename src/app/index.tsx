import { Text, View, StyleSheet, Button, Alert } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>Edit src/app/index.tsx to edit this screen.</Text>
        <Button onPress={() => Alert.alert("Alert Button pressed.")} title="Alert"/>
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
