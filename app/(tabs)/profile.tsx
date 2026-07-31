import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from "expo-image";
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Background from "@/assets/svg/homehead.svg";
import Notification from "@/assets/svg/notification.svg";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  menucontainer:{
    flex: 1,
    marginTop: 15,
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
  },
  item:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
  },
  profile_text: {
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: 500,
        flex:1
  },



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
          source={require("@/assets/svg/profilepicture.png")}
          style={styles.logo}
        />
        <Text style={styles.pname}>Enjelina Morgeana</Text>
        <Text style={styles.username}>@enjelina_morgeana</Text>

        <View style={styles.menucontainer}>
                <TouchableOpacity style={styles.item}>
                    <Ionicons name="diamond-sharp" size={24} color="#48B4A2" />
                    <Text style={styles.profile_text}>Invite Friends</Text>
                </TouchableOpacity>

                <View style={{borderBottomColor: '#EEEEEE',
                borderBottomWidth: 1,}}>
                </View>

                <TouchableOpacity style={styles.item}>
                    <MaterialCommunityIcons name="account" size={24} color="black" />
                    <Text style={styles.profile_text}>Account Info</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <MaterialIcons name="people-alt" size={24} color="black" />
                    <Text style={styles.profile_text}>Personal profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <FontAwesome name="envelope" size={24} color="black" />
                    <Text style={styles.profile_text}>Message center</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}   >
                    <MaterialCommunityIcons name="shield-half-full" size={24} color="black" />
                    <Text style={styles.profile_text}>Login and security</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.item}>
                    <Fontisto name="locked" size={24} color="black" />
                    <Text style={styles.profile_text}> Data and privacy</Text>
                </TouchableOpacity>        

    </View>
    </View>

    )
}