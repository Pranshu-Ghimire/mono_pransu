import Ionicons from "@expo/vector-icons/Ionicons"
import { useRouter } from "expo-router"
import { StyleSheet, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

export function BackButton(){
    const router = useRouter();
    return(
        <TouchableOpacity onPress={() => router.back()} style={styles.container}>
            <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
    )
}