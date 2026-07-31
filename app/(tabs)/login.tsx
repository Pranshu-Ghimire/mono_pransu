import Background from "@/assets/svg/onboardingbag.svg";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/button";
import { InputField } from "@/components/input-field";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  actionconatiner: {
    padding: 18,
  },

  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  formContainer: {
    padding: 18,
    marginTop: 170,
  },

  greetings: {
    color: "#0f0f0f",
    fontSize: 30,
    fontWeight: "700",
    position: "absolute",
    top: 50,
    left: 30,
  },
  smallgreet: {
    color: "#378c3f",
    fontSize: 17,
    fontWeight: "300",
    position: "absolute",
    top: 130,
    left: 27,
  },

  accountText: {
    color: "#555",
    textAlign: "center",

  },
  loginText: {
    color: "#4CAF50",
    fontWeight: "bold",

  },
})

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Background />
      </View>
      <SafeAreaView>
        <View>
          <BackButton />
          <Text style={styles.greetings}>Welcome {"\n"}back 👋</Text>
          <Text style={styles.smallgreet}> Sign in to your account to continue </Text>
        </View>
        <View style={styles.formContainer}>
          <InputField label="Email" />
          <InputField label="Password" />
          <View style={{ marginTop: 100 }}>
            <Button title="Sign In" type="primary" />
          </View>
        </View>
        <View>
          <Text style={styles.accountText}>Don't have an account?
            <Text style={styles.loginText}>Log In</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  )
}