import { View, Text, StyleSheet } from "react-native";

const SuccessScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Your Account is successfully made click here to proceed in home screen.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default SuccessScreen;