import { View, Text, StyleSheet, TextInput, SafeAreaView} from "react-native";

const RegisterScreen = () => {
    return (
        <View style={styles.screen}>
            <View>
                <TextInput style={styles.input1} placeholder="First Name"/>
            </View>
            <View>
                <TextInput style={styles.input2} placeholder="Last Name"/>
            </View>
            <View>
                <TextInput style={styles.input3} placeholder="Middle Initial" />
            </View>
            <View>
                <TextInput style={styles.input4} placeholder="Address" />
            </View>
            <View>
                <TextInput style={styles.input5} placeholder="Email" />
            </View>
            <View>
                <TextInput style={styles.input6} placeholder="Password"
                secureTextEntry={true}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input1: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "80%",
        justifyContent: "center",
        borderRadius: 100,
        marginTop: 150,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,

    },
    input2: {
        borderColor: "grey",
        backgroundColor:"white",
        width: "80%",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,
    },
    input3: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "80%",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,
    },
    input4: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "80%",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,
    },
    input5: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "80%",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,
    },
    input6: {
        borderColor: "grey",
        backgroundColor: "white",
        width: "80%",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 5,
        marginLeft: 35,
    },


    screen: {
        backgroundColor: "yellow",
        flex: 1,
        padding: 10,
    },
})

export default RegisterScreen;