import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Pressable } from "react-native";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc7c7",
  },
});

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => console.log("Home")}>
        <AntDesign name="home" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => console.log("Statistics")}>
        <Entypo name="bar-graph" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => console.log("Cards")}>
        <AntDesign name="credit-card" size={24} color="black" />
      </Pressable>

      <Pressable onPress={() => console.log("Profile")}>
        <Ionicons name="people" size={24} color="black" />
      </Pressable>
    </View>
  );
}