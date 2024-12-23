import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const SellerOrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: "1", product: "Smartphone X100", status: "Pending", buyer: "John Doe" },
    { id: "2", product: "Laptop Pro", status: "Confirmed", buyer: "Jane Smith" },
    { id: "3", product: "Wireless Earbuds", status: "Shipped", buyer: "Emily Davis" },
  ]);

  const handleConfirm = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Confirmed" } : order
      )
    );
    Alert.alert("Order Confirmed", "The order has been confirmed.");
  };

  const handleShip = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Shipped" } : order
      )
    );
    Alert.alert("Order Shipped", "The order has been marked as shipped.");
  };

  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderText}>Product: {item.product}</Text>
      <Text style={styles.orderText}>Buyer: {item.buyer}</Text>
      <Text style={styles.orderText}>Status: {item.status}</Text>
      <View style={styles.actions}>
        {item.status === "Pending" && (
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => handleConfirm(item.id)}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        )}
        {item.status === "Confirmed" && (
          <TouchableOpacity
            style={styles.shipButton}
            onPress={() => handleShip(item.id)}
          >
            <Text style={styles.buttonText}>Ship</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        style={styles.orderList}
      />
      {/* Placeholder for Shipping Integration */}
      <TouchableOpacity
        style={styles.shippingButton}
        onPress={() => Alert.alert("Shipping Integration", "Integration Placeholder")}
      >
        <Text style={styles.buttonText}>Integrate with Shipping Partner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SellerOrderManagement;

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
  orderList: {
    marginBottom: 20,
  },
  orderItem: {
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  shipButton: {
    backgroundColor: "#FF5722",
    padding: 10,
    borderRadius: 5,
  },
  shippingButton: {
    backgroundColor: "#FFB74D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
