import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { RegisterAPI } from "../components/Login/api/api";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    phone_number: "",
    password: "",
    username: "",
    confirm_password: "",
  });

  const handleSubmit = () => {
    RegisterAPI(data);
    console.log(data);
  };
  return (
    <View style={styles.screen}>
      <View>
        <TextInput
          style={styles.input1}
          placeholder="First Name"
          value={data.first_name}
          onChangeText={(value) => setData({ ...data, first_name: value })}
        />
      </View>
      <View>
        <TextInput
          style={styles.input3}
          placeholder="Middle Name"
          value={data.middle_name}
          onChangeText={(value) => setData({ ...data, middle_name: value })}
        />
      </View>
      <View>
        <TextInput
          style={styles.input2}
          placeholder="Last Name"
          value={data.last_name}
          onChangeText={(value) => setData({ ...data, last_name: value })}
        />
      </View>
      <View>
        <TextInput
          style={styles.input2}
          placeholder="Phone Number"
          keyboardType="numeric"
          value={data.phone_number}
          onChangeText={(value) => setData({ ...data, phone_number: value })}
        />
      </View>

      <View>
        <TextInput
          style={styles.input5}
          placeholder="Email"
          value={data.email}
          onChangeText={(value) =>
            setData({
              ...data,
              email: value,
              username: value,
            })
          }
        />
      </View>
      <View>
        <TextInput
          style={styles.input6}
          placeholder="Password"
          secureTextEntry={true}
          value={data.password}
          onChangeText={(value) => setData({ ...data, password: value })}
        />
        <TextInput
          style={styles.input6}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={data.confirm_password}
          onChangeText={(value) =>
            setData({ ...data, confirm_password: value })
          }
        />
      </View>
      <View style={styles.button1}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

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
    backgroundColor: "white",
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
  button1: {
    padding: 5,
    width: "80%",
    marginLeft: 35,
    alignItems: "center",
  },

  screen: {
    backgroundColor: "yellow",
    flex: 1,
    padding: 10,
  },
});

export default RegisterScreen;
