import Background from "@/assets/svg/onboardingbag.svg";

import { Image } from "expo-image";
import { StyleSheet, View , Text, Pressable } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        padding: 18,
    },
    actionContainer: {
        paddingVertical: 18,
        paddingHorizontal:20,
        marginBottom: 50,
        alignItems: "center",

    },
    logo: {
        position: "absolute",
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
    },
    button: {
        width: 356,
        height: 67,
        backgroundColor: "#34A853", // Green
        borderRadius: 34,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 10,
    
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "600",

    },
    imageContainer: {
        flex: 1,

    },
    accountText: {
        marginTop: 20,
        fontSize: 16,
        color: "#555",

    },
    loginText: {
        color: "#4CAF50",
        fontWeight: "bold",

    }

});


export default function Index() {
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Background style={{ width: "100%", height: 600 }} />
            <Image
                source={require("@/assets/svg/onboard.png")}
                style={styles.logo}
            />
        </View>

        <View style={styles.actionContainer}>
            <Pressable style={styles.button} onPress={() => alert("Loading...")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>

                <Text style={styles.accountText}>
                    Already have an account? {" "}

                    <Text style={styles.loginText} onPress={() => alert("Navigating")}>
                        Log In
                    </Text>

                </Text>

        </View>
    </View>
);
}