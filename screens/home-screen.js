import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Button, TextInput } from "react-native";
import LoginScreen from "../components/Login/login-screen";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <LoginScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: "yellow",
        flex: 1,

    }
})

export default HomeScreen;