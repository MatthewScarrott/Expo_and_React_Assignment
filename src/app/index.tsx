import { View, Text, Image, StyleSheet, Button, ScrollView, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import img1 from '@/assets/images/external/img_1.jpg';
import img2 from '@/assets/images/external/img_2.jpg';
import img3 from '@/assets/images/external/img_3.jpg';
import img4 from '@/assets/images/external/img_4.jpg';
import img5 from '@/assets/images/external/img_5.jpg';
import img6 from '@/assets/images/external/img_6.jpg';
import img7 from '@/assets/images/external/img_7.jpg';
import img8 from '@/assets/images/external/img_8.jpg';
import img9 from '@/assets/images/external/img_9.jpg';

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
      <ScrollView>
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

        <View style={styles.description}>
          <Text>OOTD Everyday</Text>
          <Text>Fit check!</Text>
          <Text>You know we'll hype you up.</Text>
        </View>

        <View style={styles.memberDropMenu}>
          <Button onPress={() => console.log("Member dropdown pressed!")} title="Member"/>
        </View>

        <View>
          <View style={styles.row}>
            <Image source={img1} style={styles.image} resizeMode="center"/>
            <Image source={img2} style={styles.image} resizeMode="center"/>
            <Image source={img3} style={styles.image} resizeMode="center"/>
          </View>
          <View style={styles.row}>
            <Image source={img4} style={styles.image} resizeMode="center"/>
            <Image source={img5} style={styles.image} resizeMode="center"/>
            <Image source={img6} style={styles.image} resizeMode="center"/>
          </View>
          <View style={styles.row}>
            <Image source={img7} style={styles.image} resizeMode="center"/>
            <Image source={img8} style={styles.image} resizeMode="center"/>
            <Image source={img9} style={styles.image} resizeMode="center"/>
          </View>
        </View>

        <View style={styles.alert}>
          <Button onPress={() => Alert.alert("Alert Button pressed.")} title="Alert"/>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text>Home</Text>
        </View>

        <View>
          <Text>Search</Text>
        </View>

        <View>
          <Text>Reels</Text>
        </View>

        <View>
          <Text>Shop</Text>
        </View>

        <View>
          <Text>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  headerTitle: {
    alignItems: "center"
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12
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
  description: {
    padding: 12
  },
  memberDropMenu: {
    borderWidth: 1,
    borderColor: "#000",
    margin: 12
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12
  },
  image: {
    width: 100,
    height: 100
  },
  alert: {
    padding: 12
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 32,
    paddingRight: 32
  }
});
