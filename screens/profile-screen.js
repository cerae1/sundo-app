import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default ProfileScreen;