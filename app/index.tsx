import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Background from "../assets/svg/homehead.svg";
import Notification from "../assets/svg/notification.svg";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Footer from "../components/Footer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
  },

  profile: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
    top: 68,
  },

  notification: {
    width: 40,
    height: 60,
    position: "absolute",
    bottom:35,
    left:120,
  },

  pname:{
    color: "#000000",
    fontSize:20,
    fontWeight: "500",
    marginTop:20,
    alignSelf:"center",
  },
  
  logo: {
    position: "absolute",
    width: 110,
    height:110,
    top: 210,
    alignSelf:"center",
    borderRadius:55,
  },

  username:{
    color: "#41875d",
    textAlign:"center",
  },
  icons:{
    position: "absolute",
    top:-75,
    right:130,    
  }

});

export default function Home() {
    return ( 
    <View style={styles.container}>
        <View style={styles.header}>
            <Background style={styles.background} />

            <View style={styles.headerContent}>
                    <Text style={styles.profile}>Profile</Text>
                <Pressable onPress={() => Alert.alert("No Notification")}>
                <Notification style={styles.notification} />
                </Pressable>
                <Pressable onPress={() => Alert.alert(" Directing to privious page")}>
                <EvilIcons 
                style={styles.icons}
                name="chevron-left" size={44} color="white" />
                </Pressable>
            </View>
        </View>  
        
        <Image
          source={require("../assets/svg/profilepicture.png")}
          style={styles.logo}
        />
        <Text style={styles.pname}>Enjelina Morgeana</Text>
        <Text style={styles.username}>@enjelina_morgeana</Text>
        <Footer />


    </View>

    )
}