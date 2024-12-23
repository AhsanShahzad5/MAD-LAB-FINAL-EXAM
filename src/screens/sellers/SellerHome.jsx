import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SellerHome = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seller Dashboard</Text>

      {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SellerProductListing")}
      >
        <Text style={styles.buttonText}>Product Listing & Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SellerOrderManagement")}
      >
        <Text style={styles.buttonText}>Order Management</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SellerEarnings")}
      >
        <Text style={styles.buttonText}>Earnings & Payouts</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SellerHome;
