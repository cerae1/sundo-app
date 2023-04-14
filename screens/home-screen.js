import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>This is a home screen</Text>
            <Button title="move to profile" onPress={()=>navigation.navigate('Profile')} />
            <Button title="move to register" onPress={()=>navigation.navigate('Register')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomeScreen;