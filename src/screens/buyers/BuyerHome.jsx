import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import userAtom from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";

const BuyerHomePage = ({ navigation }) => {
  const user = useRecoilValue(userAtom);
  console.log(user);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.name} Home Page</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuyerProfileSetup")}
      >
        <Text style={styles.buttonText}>Profile Setup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuyerProductsSearch")}
      >
        <Text style={styles.buttonText}>Search and Discovery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuyerProductDetailScreen")}
      >
        <Text style={styles.buttonText}>Product Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuyerCart")}
      >
        <Text style={styles.buttonText}>Cart and Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuyerOrderTracking")}
      >
        <Text style={styles.buttonText}>Order Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BuyerHomePage;
