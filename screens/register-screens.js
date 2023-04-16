import { View, Text, StyleSheet, TextInput } from "react-native";

const RegisterScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.input}>
                <TextInput style={styles.input} placeholder="First Name"/>
                <TextInput style={styles.input} placeholder="Last Name"/>
                <TextInput style={styles.input} placeholder="Middle Initial"/>
                <TextInput style={styles.input} placeholder="Address"/>
                <TextInput style={styles.input} placeholder="Password"/>
                <TextInput style={styles.input} placeholder="Email"/>
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