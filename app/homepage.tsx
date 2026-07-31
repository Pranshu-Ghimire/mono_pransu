import Background from "../assets/svg/onboardingbag.svg";
import { Image } from "expo-image";
import { StyleSheet, View , Text, Pressable } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    height: 280,
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  profile: {
    color: "#FFFFFF",
    fontSize: 18,
    justifyContent: "center",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 4,
  },

  notification: {
    width: 40,
    height: 40,
  },
  
  box: {
    width: "90%",
    height: 180,
    backgroundColor: "hsl(166, 45%, 31%)",
    borderRadius: 25,
    alignSelf: "center",
    marginTop: -90,
  },

  balanceTitle: {
    color: "#FFFFFF",
    fontSize: 14,
},

  TotalAmount: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    marginTop: 8,

},
});

export default function Home() {
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Background style={styles.background} />

                <View style={styles.headerContent}>
                    
                </View>
            </View>
        </View>
    )
}