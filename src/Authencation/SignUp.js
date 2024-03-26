import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  backgroundImage,
  ImageBackground,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { userSignUp } from "../../config/Firebase";

function SignUp({ navigation }) {
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = navigation.navigate;

  const signUp = async () => {
    if (!userName || !confirmPassword || !email || !password) {
      return alert("fill all");
    } else {
      await userSignUp({ userName, confirmPassword, email, password }, navigator);
    }
  };

  return (
    <ImageBackground
      source={require("../view/Images/bg-mobile.jpg")}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="black"
          autoCapitalize="words"
          value={userName}
          onChangeText={setUserName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="black"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#3282b8"
          onPress={signUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.text}
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text}>Already have an account </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: 300,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: 150,
    backgroundColor: "black",
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});
export default SignUp;
