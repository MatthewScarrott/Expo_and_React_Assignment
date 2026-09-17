import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Text>Back</Text>
        </View>

        <View style={styles.headerTitle}>
          <Text>Group Profile</Text>
          <Text>ootd_everyday</Text>
        </View>

        <View>
          <Text>Add</Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View style={styles.profilePhoto}>
          <Text style={styles.profilePhotoText}>OO{'\n'}TD</Text>
        </View>

        <View style={styles.subHeaderCols}>
          <Text>53</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.subHeaderCols}>
          <Text>12</Text>
          <Text>Members</Text>
        </View>

        <View style={styles.subHeaderCols}>
          <Text>1</Text>
          <Text>Admins</Text>
        </View>
      </View>

      <View>
        <Text>OOTD Everyday</Text>
        <Text>Fit check!</Text>
        <Text>You know we'll hype you up.</Text>
      </View>

      <View style={styles.memberDropMenu}>
        <Button onPress={() => console.log("Member dropdown pressed!")} title="Member"/>
      </View>

      <View>
        <View style={styles.row}>
          <Text>Image 1</Text>
          <Text>Image 2</Text>
          <Text>Image 3</Text>
        </View>
        <View style={styles.row}>
          <Text>Image 4</Text>
          <Text>Image 5</Text>
          <Text>Image 6</Text>
        </View>
        <View style={styles.row}>
          <Text>Image 7</Text>
          <Text>Image 8</Text>
          <Text>Image 9</Text>
        </View>
      </View>

      <View>
        <Button onPress={() => Alert.alert("Alert Button pressed.")} title="Alert"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: {
    alignItems: "center"
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profilePhoto: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: "#048beb",
    alignItems: "center",
    justifyContent: "center"
  },
  profilePhotoText: {
    color: "#fff",
    textAlign: "center"
  },
  subHeaderCols: {
    alignItems: "center"
  },
  memberDropMenu: {
    borderWidth: 1,
    borderColor: "#000"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
