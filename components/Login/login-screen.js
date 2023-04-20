import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { LoginAPI } from "./api/api";

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(data);
    LoginAPI(data, navigation);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        placeholder="Email"
        value={data.username}
        onChangeText={(value) => setData({ ...data, username: value })}
      />
      <TextInput
        style={styles.input2}
        placeholder="Password"
        secureTextEntry={true}
        value={data.password}
        onChangeText={(value) => setData({ ...data, password: value })}
      />

      <View style={styles.buttoncontainer}>
        <Button title="Login" onPress={handleSubmit} />
      </View>

      <View style={styles.buttoncontainer2}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    borderColor: "grey",
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    marginTop: 200,
    marginBottom: 10,
  },
  input2: {
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
    width: "100%",
    padding: 10,
  },
  buttoncontainer2: {
    width: "100%",
    padding: 10,
  },
});

export default Login;
