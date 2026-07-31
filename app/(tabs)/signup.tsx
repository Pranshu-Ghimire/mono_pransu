import { StyleSheet, Text, View } from "react-native";
import Background from "@/assets/svg/onboarding_bg.svg";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/button";
import { InputField } from "@/components/input-field";
import { signUp } from "@/services/firebase";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    actionContainer: {
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
    },
    headerContainer: {
        paddingHorizontal: 14,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#000',
    },

});

export default function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSignUp = () => {
        setIsLoading(true);
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.push('/login');
                Toast.show({
                    type: 'success',
                    text1: 'Account created successfully',
                })
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                Toast.show({
                    type: 'error',
                    text1: error.message,
                })
            }).finally(() => {
                setIsLoading(false);
            });
    }


    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Background />
            </View>
            <SafeAreaView>
                <BackButton />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Create</Text>
                    <Text style={styles.headerTitle}>Account ✨</Text>
                    <Text style={styles.headerSubtitle}>Join to start tracking your finances</Text>
                </View>
                <View style={styles.formContainer}>
                    <InputField label="Full Name" value={fullName} onChangeText={setFullName} />
                    <InputField label="Email" value={email} onChangeText={setEmail} />
                    <InputField label="Password" value={password} onChangeText={setPassword} />
                    <Button title="Create Account" type="primary" onPress={handleSignUp} disabled={isLoading} loading={isLoading} />
                </View>
            </SafeAreaView>
        </View>
    );
}