import axios from "axios";

const api = axios.create({
  baseURL: "https://cherrymaebatiquin.pythonanywhere.com/",
});

export function RegisterAPI(data) {
  api
    .post("api/v1/accounts/users/", data)
    .then((response) => {
      console.log(response.data);
      alert(
        "Successfully Registered!\nPlease check your email\nfor activation"
      );
    })
    .catch((error) => {
      alert("Registration Failed!");
      console.log(error);
      console.log(error.request);
    });
}

export function LoginAPI(data, navigation) {
  api
    .post("api/v1/accounts/token/login", data)
    .then((response) => {
      navigation.navigate("Profile");
    })
    .catch((error) => {
      console.log(error);
      alert(
        "INVALID CREDENTIALS!\nOr your account may not be activated.\nPlease check your email for activation"
      );
    });
}
