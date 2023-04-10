import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import colors from "../config/Restaurant/colors.js";
import SPACING from "../config/SPACING";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function DetailScreen() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);

  const goToHomeScreen = () => {
    navigation.navigate("Home");
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ marginRight: SPACING }}>
                <Ionicons
                  name="cart-outline"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "60%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: SPACING * 5, fontWeight: "bold" }}>
              Flesh Salad
            </Text>
          </View>
          <View>
            <Image
              style={{ width: "120%" }}
              source={require("../assets/restaurant/yoav-aziz-AiHJiRCwB3w-unsplash-removebg-preview.png")}
            />
          </View>
          <View>
            <Text style={styles.priceText}>$55</Text>
          </View>
          <View style={styles.contain}>
            <Image
              style={styles.image}
              source={require("../assets/restaurant/cart.png")}
            />
            <View style={styles.cartContainer}>
              <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: "50",
  },
  image: {
    width: 100,
    height: 100,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#007AFF",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  priceText: {
    top: -10,
    left: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DetailScreen;
