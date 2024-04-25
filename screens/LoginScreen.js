import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
            Sign In
          </Text>
          <Text style={{ marginTop: 15, fontSize: 17, fontWeight: "600" }}>
            Sign In to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>
            <TextInput
              value={email}
              style={styles.textInput}
              placeholderTextColor={"black"}
              placeholder="Enter your Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>
            <TextInput
              value={password}
              style={styles.textInput}
              secureTextEntry={true}
              placeholderTextColor={"black"}
              placeholder="Enter your Password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Pressable style={styles.loginBtn}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>

          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "gray", fontSize: 16, textAlign: "center" }}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  textInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 3,
    width: 300,
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: "#4A55A2",
    width: 200,
    padding: 15,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 6,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});