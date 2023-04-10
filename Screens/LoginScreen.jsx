import React from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import AppTextInput from "../components/AppTextInput.jsx";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors.js";
import FontSize from "../constants/FontSize.js";
import Spacing from "../constants/Spacing.js";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SPACING from "../config/SPACING";

function LoginScreen() {
  const navigation = useNavigation();

  const goToRegistrationScreen = () => {
    navigation.navigate("Register");
  };

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={goToHomeScreen}>
          <Image
            style={{
              width: SPACING * 4.5,
              height: SPACING * 4.5,
              borderRadius: SPACING * 3,
              marginRight: SPACING,
            }}
            onPress={""}
            source={require("../assets/restaurant/back.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontWeight: "bold",
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToRegistrationScreen}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
