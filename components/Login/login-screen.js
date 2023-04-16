import { useNavigation } from "@react-navigation/native";
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const Login =  () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
             {/* input for log in */}
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Password"
            secureTextEntry={true}/>    
             {/* for different 2 buttons below is button 1 */}
                <View style ={styles.buttoncontainer}>
                    <Button title="Login" onPress={()=> Alert.alert('You are logged in')} />
                </View>
                 {/* this is button 2 */}
                <View style ={styles.buttoncontainer2}>
                    <Button title="Register" onPress={()=>navigation.navigate('Register')}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "100%",
        borderWidth: 1,
        borderRadius: 100,
        padding: 10,
        justifyContent: "center",
        marginBottom: 10,
    },
    buttoncontainer: {
        marginBottom: 10,
        width: "100%",
        padding: 10,
    },
    buttoncontainer2: {
        marginBottom: 10,
        width: "100%",
        padding: 10,
    }
})

export default Login;