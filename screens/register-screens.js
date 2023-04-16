import { View, Text, StyleSheet, TextInput } from "react-native";

const RegisterScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.input}>
                <TextInput style={styles.input} placeholder="First Name"/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default RegisterScreen;